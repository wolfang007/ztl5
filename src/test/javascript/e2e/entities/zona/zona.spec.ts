import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ZonaComponentsPage, ZonaDeleteDialog, ZonaUpdatePage } from './zona.page-object';

const expect = chai.expect;

describe('Zona e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let zonaComponentsPage: ZonaComponentsPage;
  let zonaUpdatePage: ZonaUpdatePage;
  let zonaDeleteDialog: ZonaDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Zonas', async () => {
    await navBarPage.goToEntity('zona');
    zonaComponentsPage = new ZonaComponentsPage();
    await browser.wait(ec.visibilityOf(zonaComponentsPage.title), 5000);
    expect(await zonaComponentsPage.getTitle()).to.eq('myztl5App.zona.home.title');
    await browser.wait(ec.or(ec.visibilityOf(zonaComponentsPage.entities), ec.visibilityOf(zonaComponentsPage.noResult)), 1000);
  });

  it('should load create Zona page', async () => {
    await zonaComponentsPage.clickOnCreateButton();
    zonaUpdatePage = new ZonaUpdatePage();
    expect(await zonaUpdatePage.getPageTitle()).to.eq('myztl5App.zona.home.createOrEditLabel');
    await zonaUpdatePage.cancel();
  });

  it('should create and save Zonas', async () => {
    const nbButtonsBeforeCreate = await zonaComponentsPage.countDeleteButtons();

    await zonaComponentsPage.clickOnCreateButton();

    await promise.all([
      zonaUpdatePage.setNomeInput('nome'),
      zonaUpdatePage.statoSelectLastOption(),
      zonaUpdatePage.profiloOrarioSelectLastOption(),
      zonaUpdatePage.tipologiaZonaSelectLastOption(),
      // zonaUpdatePage.gruppoVarchiSelectLastOption(),
    ]);

    expect(await zonaUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');

    await zonaUpdatePage.save();
    expect(await zonaUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await zonaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Zona', async () => {
    const nbButtonsBeforeDelete = await zonaComponentsPage.countDeleteButtons();
    await zonaComponentsPage.clickOnLastDeleteButton();

    zonaDeleteDialog = new ZonaDeleteDialog();
    expect(await zonaDeleteDialog.getDialogTitle()).to.eq('myztl5App.zona.delete.question');
    await zonaDeleteDialog.clickOnConfirmButton();

    expect(await zonaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
