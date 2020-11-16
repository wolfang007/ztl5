import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProfiloOrarioComponentsPage, ProfiloOrarioDeleteDialog, ProfiloOrarioUpdatePage } from './profilo-orario.page-object';

const expect = chai.expect;

describe('ProfiloOrario e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let profiloOrarioComponentsPage: ProfiloOrarioComponentsPage;
  let profiloOrarioUpdatePage: ProfiloOrarioUpdatePage;
  let profiloOrarioDeleteDialog: ProfiloOrarioDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load ProfiloOrarios', async () => {
    await navBarPage.goToEntity('profilo-orario');
    profiloOrarioComponentsPage = new ProfiloOrarioComponentsPage();
    await browser.wait(ec.visibilityOf(profiloOrarioComponentsPage.title), 5000);
    expect(await profiloOrarioComponentsPage.getTitle()).to.eq('myztl5App.profiloOrario.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(profiloOrarioComponentsPage.entities), ec.visibilityOf(profiloOrarioComponentsPage.noResult)),
      1000
    );
  });

  it('should load create ProfiloOrario page', async () => {
    await profiloOrarioComponentsPage.clickOnCreateButton();
    profiloOrarioUpdatePage = new ProfiloOrarioUpdatePage();
    expect(await profiloOrarioUpdatePage.getPageTitle()).to.eq('myztl5App.profiloOrario.home.createOrEditLabel');
    await profiloOrarioUpdatePage.cancel();
  });

  it('should create and save ProfiloOrarios', async () => {
    const nbButtonsBeforeCreate = await profiloOrarioComponentsPage.countDeleteButtons();

    await profiloOrarioComponentsPage.clickOnCreateButton();

    await promise.all([
      profiloOrarioUpdatePage.setNomeInput('nome'),
      profiloOrarioUpdatePage.statoSelectLastOption(),
      // profiloOrarioUpdatePage.regolaOrariaSelectLastOption(),
    ]);

    expect(await profiloOrarioUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');

    await profiloOrarioUpdatePage.save();
    expect(await profiloOrarioUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await profiloOrarioComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last ProfiloOrario', async () => {
    const nbButtonsBeforeDelete = await profiloOrarioComponentsPage.countDeleteButtons();
    await profiloOrarioComponentsPage.clickOnLastDeleteButton();

    profiloOrarioDeleteDialog = new ProfiloOrarioDeleteDialog();
    expect(await profiloOrarioDeleteDialog.getDialogTitle()).to.eq('myztl5App.profiloOrario.delete.question');
    await profiloOrarioDeleteDialog.clickOnConfirmButton();

    expect(await profiloOrarioComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
