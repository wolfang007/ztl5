import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { MotivazioneComponentsPage, MotivazioneDeleteDialog, MotivazioneUpdatePage } from './motivazione.page-object';

const expect = chai.expect;

describe('Motivazione e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let motivazioneComponentsPage: MotivazioneComponentsPage;
  let motivazioneUpdatePage: MotivazioneUpdatePage;
  let motivazioneDeleteDialog: MotivazioneDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Motivaziones', async () => {
    await navBarPage.goToEntity('motivazione');
    motivazioneComponentsPage = new MotivazioneComponentsPage();
    await browser.wait(ec.visibilityOf(motivazioneComponentsPage.title), 5000);
    expect(await motivazioneComponentsPage.getTitle()).to.eq('myztl5App.motivazione.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(motivazioneComponentsPage.entities), ec.visibilityOf(motivazioneComponentsPage.noResult)),
      1000
    );
  });

  it('should load create Motivazione page', async () => {
    await motivazioneComponentsPage.clickOnCreateButton();
    motivazioneUpdatePage = new MotivazioneUpdatePage();
    expect(await motivazioneUpdatePage.getPageTitle()).to.eq('myztl5App.motivazione.home.createOrEditLabel');
    await motivazioneUpdatePage.cancel();
  });

  it('should create and save Motivaziones', async () => {
    const nbButtonsBeforeCreate = await motivazioneComponentsPage.countDeleteButtons();

    await motivazioneComponentsPage.clickOnCreateButton();

    await promise.all([motivazioneUpdatePage.setDescrizioneInput('descrizione')]);

    expect(await motivazioneUpdatePage.getDescrizioneInput()).to.eq(
      'descrizione',
      'Expected Descrizione value to be equals to descrizione'
    );

    await motivazioneUpdatePage.save();
    expect(await motivazioneUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await motivazioneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Motivazione', async () => {
    const nbButtonsBeforeDelete = await motivazioneComponentsPage.countDeleteButtons();
    await motivazioneComponentsPage.clickOnLastDeleteButton();

    motivazioneDeleteDialog = new MotivazioneDeleteDialog();
    expect(await motivazioneDeleteDialog.getDialogTitle()).to.eq('myztl5App.motivazione.delete.question');
    await motivazioneDeleteDialog.clickOnConfirmButton();

    expect(await motivazioneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
