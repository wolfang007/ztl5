import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { AutorizzazioneComponentsPage, AutorizzazioneDeleteDialog, AutorizzazioneUpdatePage } from './autorizzazione.page-object';

const expect = chai.expect;

describe('Autorizzazione e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let autorizzazioneComponentsPage: AutorizzazioneComponentsPage;
  let autorizzazioneUpdatePage: AutorizzazioneUpdatePage;
  let autorizzazioneDeleteDialog: AutorizzazioneDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Autorizzaziones', async () => {
    await navBarPage.goToEntity('autorizzazione');
    autorizzazioneComponentsPage = new AutorizzazioneComponentsPage();
    await browser.wait(ec.visibilityOf(autorizzazioneComponentsPage.title), 5000);
    expect(await autorizzazioneComponentsPage.getTitle()).to.eq('myztl5App.autorizzazione.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(autorizzazioneComponentsPage.entities), ec.visibilityOf(autorizzazioneComponentsPage.noResult)),
      1000
    );
  });

  it('should load create Autorizzazione page', async () => {
    await autorizzazioneComponentsPage.clickOnCreateButton();
    autorizzazioneUpdatePage = new AutorizzazioneUpdatePage();
    expect(await autorizzazioneUpdatePage.getPageTitle()).to.eq('myztl5App.autorizzazione.home.createOrEditLabel');
    await autorizzazioneUpdatePage.cancel();
  });

  it('should create and save Autorizzaziones', async () => {
    const nbButtonsBeforeCreate = await autorizzazioneComponentsPage.countDeleteButtons();

    await autorizzazioneComponentsPage.clickOnCreateButton();

    await promise.all([
      autorizzazioneUpdatePage.setNomeInput('nome'),
      autorizzazioneUpdatePage.setDescrizioneInput('descrizione'),
      autorizzazioneUpdatePage.statoSelectLastOption(),
    ]);

    expect(await autorizzazioneUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');
    expect(await autorizzazioneUpdatePage.getDescrizioneInput()).to.eq(
      'descrizione',
      'Expected Descrizione value to be equals to descrizione'
    );

    await autorizzazioneUpdatePage.save();
    expect(await autorizzazioneUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await autorizzazioneComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last Autorizzazione', async () => {
    const nbButtonsBeforeDelete = await autorizzazioneComponentsPage.countDeleteButtons();
    await autorizzazioneComponentsPage.clickOnLastDeleteButton();

    autorizzazioneDeleteDialog = new AutorizzazioneDeleteDialog();
    expect(await autorizzazioneDeleteDialog.getDialogTitle()).to.eq('myztl5App.autorizzazione.delete.question');
    await autorizzazioneDeleteDialog.clickOnConfirmButton();

    expect(await autorizzazioneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
