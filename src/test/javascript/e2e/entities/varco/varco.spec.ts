import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { VarcoComponentsPage, VarcoDeleteDialog, VarcoUpdatePage } from './varco.page-object';

const expect = chai.expect;

describe('Varco e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let varcoComponentsPage: VarcoComponentsPage;
  let varcoUpdatePage: VarcoUpdatePage;
  let varcoDeleteDialog: VarcoDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Varcos', async () => {
    await navBarPage.goToEntity('varco');
    varcoComponentsPage = new VarcoComponentsPage();
    await browser.wait(ec.visibilityOf(varcoComponentsPage.title), 5000);
    expect(await varcoComponentsPage.getTitle()).to.eq('myztl5App.varco.home.title');
    await browser.wait(ec.or(ec.visibilityOf(varcoComponentsPage.entities), ec.visibilityOf(varcoComponentsPage.noResult)), 1000);
  });

  it('should load create Varco page', async () => {
    await varcoComponentsPage.clickOnCreateButton();
    varcoUpdatePage = new VarcoUpdatePage();
    expect(await varcoUpdatePage.getPageTitle()).to.eq('myztl5App.varco.home.createOrEditLabel');
    await varcoUpdatePage.cancel();
  });

  it('should create and save Varcos', async () => {
    const nbButtonsBeforeCreate = await varcoComponentsPage.countDeleteButtons();

    await varcoComponentsPage.clickOnCreateButton();

    await promise.all([
      varcoUpdatePage.setCodiceInput('codice'),
      varcoUpdatePage.setDescrizionePosizioneInput('descrizionePosizione'),
      varcoUpdatePage.statoSelectLastOption(),
    ]);

    expect(await varcoUpdatePage.getCodiceInput()).to.eq('codice', 'Expected Codice value to be equals to codice');
    expect(await varcoUpdatePage.getDescrizionePosizioneInput()).to.eq(
      'descrizionePosizione',
      'Expected DescrizionePosizione value to be equals to descrizionePosizione'
    );

    await varcoUpdatePage.save();
    expect(await varcoUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await varcoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Varco', async () => {
    const nbButtonsBeforeDelete = await varcoComponentsPage.countDeleteButtons();
    await varcoComponentsPage.clickOnLastDeleteButton();

    varcoDeleteDialog = new VarcoDeleteDialog();
    expect(await varcoDeleteDialog.getDialogTitle()).to.eq('myztl5App.varco.delete.question');
    await varcoDeleteDialog.clickOnConfirmButton();

    expect(await varcoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
