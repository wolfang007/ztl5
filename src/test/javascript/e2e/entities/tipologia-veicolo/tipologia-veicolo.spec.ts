import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { TipologiaVeicoloComponentsPage, TipologiaVeicoloDeleteDialog, TipologiaVeicoloUpdatePage } from './tipologia-veicolo.page-object';

const expect = chai.expect;

describe('TipologiaVeicolo e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tipologiaVeicoloComponentsPage: TipologiaVeicoloComponentsPage;
  let tipologiaVeicoloUpdatePage: TipologiaVeicoloUpdatePage;
  let tipologiaVeicoloDeleteDialog: TipologiaVeicoloDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load TipologiaVeicolos', async () => {
    await navBarPage.goToEntity('tipologia-veicolo');
    tipologiaVeicoloComponentsPage = new TipologiaVeicoloComponentsPage();
    await browser.wait(ec.visibilityOf(tipologiaVeicoloComponentsPage.title), 5000);
    expect(await tipologiaVeicoloComponentsPage.getTitle()).to.eq('myztl5App.tipologiaVeicolo.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(tipologiaVeicoloComponentsPage.entities), ec.visibilityOf(tipologiaVeicoloComponentsPage.noResult)),
      1000
    );
  });

  it('should load create TipologiaVeicolo page', async () => {
    await tipologiaVeicoloComponentsPage.clickOnCreateButton();
    tipologiaVeicoloUpdatePage = new TipologiaVeicoloUpdatePage();
    expect(await tipologiaVeicoloUpdatePage.getPageTitle()).to.eq('myztl5App.tipologiaVeicolo.home.createOrEditLabel');
    await tipologiaVeicoloUpdatePage.cancel();
  });

  it('should create and save TipologiaVeicolos', async () => {
    const nbButtonsBeforeCreate = await tipologiaVeicoloComponentsPage.countDeleteButtons();

    await tipologiaVeicoloComponentsPage.clickOnCreateButton();

    await promise.all([tipologiaVeicoloUpdatePage.setNomeInput('nome'), tipologiaVeicoloUpdatePage.statoSelectLastOption()]);

    expect(await tipologiaVeicoloUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');

    await tipologiaVeicoloUpdatePage.save();
    expect(await tipologiaVeicoloUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await tipologiaVeicoloComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last TipologiaVeicolo', async () => {
    const nbButtonsBeforeDelete = await tipologiaVeicoloComponentsPage.countDeleteButtons();
    await tipologiaVeicoloComponentsPage.clickOnLastDeleteButton();

    tipologiaVeicoloDeleteDialog = new TipologiaVeicoloDeleteDialog();
    expect(await tipologiaVeicoloDeleteDialog.getDialogTitle()).to.eq('myztl5App.tipologiaVeicolo.delete.question');
    await tipologiaVeicoloDeleteDialog.clickOnConfirmButton();

    expect(await tipologiaVeicoloComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
