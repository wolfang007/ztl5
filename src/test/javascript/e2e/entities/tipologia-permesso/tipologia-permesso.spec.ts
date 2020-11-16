import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
  TipologiaPermessoComponentsPage,
  TipologiaPermessoDeleteDialog,
  TipologiaPermessoUpdatePage,
} from './tipologia-permesso.page-object';

const expect = chai.expect;

describe('TipologiaPermesso e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tipologiaPermessoComponentsPage: TipologiaPermessoComponentsPage;
  let tipologiaPermessoUpdatePage: TipologiaPermessoUpdatePage;
  let tipologiaPermessoDeleteDialog: TipologiaPermessoDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load TipologiaPermessos', async () => {
    await navBarPage.goToEntity('tipologia-permesso');
    tipologiaPermessoComponentsPage = new TipologiaPermessoComponentsPage();
    await browser.wait(ec.visibilityOf(tipologiaPermessoComponentsPage.title), 5000);
    expect(await tipologiaPermessoComponentsPage.getTitle()).to.eq('myztl5App.tipologiaPermesso.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(tipologiaPermessoComponentsPage.entities), ec.visibilityOf(tipologiaPermessoComponentsPage.noResult)),
      1000
    );
  });

  it('should load create TipologiaPermesso page', async () => {
    await tipologiaPermessoComponentsPage.clickOnCreateButton();
    tipologiaPermessoUpdatePage = new TipologiaPermessoUpdatePage();
    expect(await tipologiaPermessoUpdatePage.getPageTitle()).to.eq('myztl5App.tipologiaPermesso.home.createOrEditLabel');
    await tipologiaPermessoUpdatePage.cancel();
  });

  it('should create and save TipologiaPermessos', async () => {
    const nbButtonsBeforeCreate = await tipologiaPermessoComponentsPage.countDeleteButtons();

    await tipologiaPermessoComponentsPage.clickOnCreateButton();

    await promise.all([tipologiaPermessoUpdatePage.setNomeInput('nome'), tipologiaPermessoUpdatePage.setCodiceInput('codice')]);

    expect(await tipologiaPermessoUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');
    expect(await tipologiaPermessoUpdatePage.getCodiceInput()).to.eq('codice', 'Expected Codice value to be equals to codice');

    await tipologiaPermessoUpdatePage.save();
    expect(await tipologiaPermessoUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await tipologiaPermessoComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last TipologiaPermesso', async () => {
    const nbButtonsBeforeDelete = await tipologiaPermessoComponentsPage.countDeleteButtons();
    await tipologiaPermessoComponentsPage.clickOnLastDeleteButton();

    tipologiaPermessoDeleteDialog = new TipologiaPermessoDeleteDialog();
    expect(await tipologiaPermessoDeleteDialog.getDialogTitle()).to.eq('myztl5App.tipologiaPermesso.delete.question');
    await tipologiaPermessoDeleteDialog.clickOnConfirmButton();

    expect(await tipologiaPermessoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
