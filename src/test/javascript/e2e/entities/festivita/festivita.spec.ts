import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { FestivitaComponentsPage, FestivitaDeleteDialog, FestivitaUpdatePage } from './festivita.page-object';

const expect = chai.expect;

describe('Festivita e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let festivitaComponentsPage: FestivitaComponentsPage;
  let festivitaUpdatePage: FestivitaUpdatePage;
  let festivitaDeleteDialog: FestivitaDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Festivitas', async () => {
    await navBarPage.goToEntity('festivita');
    festivitaComponentsPage = new FestivitaComponentsPage();
    await browser.wait(ec.visibilityOf(festivitaComponentsPage.title), 5000);
    expect(await festivitaComponentsPage.getTitle()).to.eq('myztl5App.festivita.home.title');
    await browser.wait(ec.or(ec.visibilityOf(festivitaComponentsPage.entities), ec.visibilityOf(festivitaComponentsPage.noResult)), 1000);
  });

  it('should load create Festivita page', async () => {
    await festivitaComponentsPage.clickOnCreateButton();
    festivitaUpdatePage = new FestivitaUpdatePage();
    expect(await festivitaUpdatePage.getPageTitle()).to.eq('myztl5App.festivita.home.createOrEditLabel');
    await festivitaUpdatePage.cancel();
  });

  it('should create and save Festivitas', async () => {
    const nbButtonsBeforeCreate = await festivitaComponentsPage.countDeleteButtons();

    await festivitaComponentsPage.clickOnCreateButton();

    await promise.all([festivitaUpdatePage.setNomeInput('2000-12-31')]);

    expect(await festivitaUpdatePage.getNomeInput()).to.eq('2000-12-31', 'Expected nome value to be equals to 2000-12-31');

    await festivitaUpdatePage.save();
    expect(await festivitaUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await festivitaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last Festivita', async () => {
    const nbButtonsBeforeDelete = await festivitaComponentsPage.countDeleteButtons();
    await festivitaComponentsPage.clickOnLastDeleteButton();

    festivitaDeleteDialog = new FestivitaDeleteDialog();
    expect(await festivitaDeleteDialog.getDialogTitle()).to.eq('myztl5App.festivita.delete.question');
    await festivitaDeleteDialog.clickOnConfirmButton();

    expect(await festivitaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
