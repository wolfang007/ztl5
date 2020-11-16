import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { GruppoVarchiComponentsPage, GruppoVarchiDeleteDialog, GruppoVarchiUpdatePage } from './gruppo-varchi.page-object';

const expect = chai.expect;

describe('GruppoVarchi e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let gruppoVarchiComponentsPage: GruppoVarchiComponentsPage;
  let gruppoVarchiUpdatePage: GruppoVarchiUpdatePage;
  let gruppoVarchiDeleteDialog: GruppoVarchiDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load GruppoVarchis', async () => {
    await navBarPage.goToEntity('gruppo-varchi');
    gruppoVarchiComponentsPage = new GruppoVarchiComponentsPage();
    await browser.wait(ec.visibilityOf(gruppoVarchiComponentsPage.title), 5000);
    expect(await gruppoVarchiComponentsPage.getTitle()).to.eq('myztl5App.gruppoVarchi.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(gruppoVarchiComponentsPage.entities), ec.visibilityOf(gruppoVarchiComponentsPage.noResult)),
      1000
    );
  });

  it('should load create GruppoVarchi page', async () => {
    await gruppoVarchiComponentsPage.clickOnCreateButton();
    gruppoVarchiUpdatePage = new GruppoVarchiUpdatePage();
    expect(await gruppoVarchiUpdatePage.getPageTitle()).to.eq('myztl5App.gruppoVarchi.home.createOrEditLabel');
    await gruppoVarchiUpdatePage.cancel();
  });

  it('should create and save GruppoVarchis', async () => {
    const nbButtonsBeforeCreate = await gruppoVarchiComponentsPage.countDeleteButtons();

    await gruppoVarchiComponentsPage.clickOnCreateButton();

    await promise.all([
      gruppoVarchiUpdatePage.setNomeInput('nome'),
      gruppoVarchiUpdatePage.setDescrizioneInput('descrizione'),
      gruppoVarchiUpdatePage.setDescrioneIntervalliInput('descrioneIntervalli'),
      gruppoVarchiUpdatePage.statoSelectLastOption(),
      // gruppoVarchiUpdatePage.posizioneSelectLastOption(),
    ]);

    expect(await gruppoVarchiUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');
    expect(await gruppoVarchiUpdatePage.getDescrizioneInput()).to.eq(
      'descrizione',
      'Expected Descrizione value to be equals to descrizione'
    );
    expect(await gruppoVarchiUpdatePage.getDescrioneIntervalliInput()).to.eq(
      'descrioneIntervalli',
      'Expected DescrioneIntervalli value to be equals to descrioneIntervalli'
    );

    await gruppoVarchiUpdatePage.save();
    expect(await gruppoVarchiUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await gruppoVarchiComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last GruppoVarchi', async () => {
    const nbButtonsBeforeDelete = await gruppoVarchiComponentsPage.countDeleteButtons();
    await gruppoVarchiComponentsPage.clickOnLastDeleteButton();

    gruppoVarchiDeleteDialog = new GruppoVarchiDeleteDialog();
    expect(await gruppoVarchiDeleteDialog.getDialogTitle()).to.eq('myztl5App.gruppoVarchi.delete.question');
    await gruppoVarchiDeleteDialog.clickOnConfirmButton();

    expect(await gruppoVarchiComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
