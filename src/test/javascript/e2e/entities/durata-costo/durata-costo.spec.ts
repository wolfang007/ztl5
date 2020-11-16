import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { DurataCostoComponentsPage, DurataCostoDeleteDialog, DurataCostoUpdatePage } from './durata-costo.page-object';

const expect = chai.expect;

describe('DurataCosto e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let durataCostoComponentsPage: DurataCostoComponentsPage;
  let durataCostoUpdatePage: DurataCostoUpdatePage;
  let durataCostoDeleteDialog: DurataCostoDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load DurataCostos', async () => {
    await navBarPage.goToEntity('durata-costo');
    durataCostoComponentsPage = new DurataCostoComponentsPage();
    await browser.wait(ec.visibilityOf(durataCostoComponentsPage.title), 5000);
    expect(await durataCostoComponentsPage.getTitle()).to.eq('myztl5App.durataCosto.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(durataCostoComponentsPage.entities), ec.visibilityOf(durataCostoComponentsPage.noResult)),
      1000
    );
  });

  it('should load create DurataCosto page', async () => {
    await durataCostoComponentsPage.clickOnCreateButton();
    durataCostoUpdatePage = new DurataCostoUpdatePage();
    expect(await durataCostoUpdatePage.getPageTitle()).to.eq('myztl5App.durataCosto.home.createOrEditLabel');
    await durataCostoUpdatePage.cancel();
  });

  it('should create and save DurataCostos', async () => {
    const nbButtonsBeforeCreate = await durataCostoComponentsPage.countDeleteButtons();

    await durataCostoComponentsPage.clickOnCreateButton();

    await promise.all([
      durataCostoUpdatePage.setDurataInput('durata'),
      durataCostoUpdatePage.setDescrizioneInput('descrizione'),
      durataCostoUpdatePage.setCostoInput('5'),
    ]);

    expect(await durataCostoUpdatePage.getDurataInput()).to.eq('durata', 'Expected Durata value to be equals to durata');
    expect(await durataCostoUpdatePage.getDescrizioneInput()).to.eq(
      'descrizione',
      'Expected Descrizione value to be equals to descrizione'
    );
    expect(await durataCostoUpdatePage.getCostoInput()).to.eq('5', 'Expected costo value to be equals to 5');

    await durataCostoUpdatePage.save();
    expect(await durataCostoUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await durataCostoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last DurataCosto', async () => {
    const nbButtonsBeforeDelete = await durataCostoComponentsPage.countDeleteButtons();
    await durataCostoComponentsPage.clickOnLastDeleteButton();

    durataCostoDeleteDialog = new DurataCostoDeleteDialog();
    expect(await durataCostoDeleteDialog.getDialogTitle()).to.eq('myztl5App.durataCosto.delete.question');
    await durataCostoDeleteDialog.clickOnConfirmButton();

    expect(await durataCostoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
