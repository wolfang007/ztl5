import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { TipologiaZonaComponentsPage, TipologiaZonaDeleteDialog, TipologiaZonaUpdatePage } from './tipologia-zona.page-object';

const expect = chai.expect;

describe('TipologiaZona e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tipologiaZonaComponentsPage: TipologiaZonaComponentsPage;
  let tipologiaZonaUpdatePage: TipologiaZonaUpdatePage;
  let tipologiaZonaDeleteDialog: TipologiaZonaDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load TipologiaZonas', async () => {
    await navBarPage.goToEntity('tipologia-zona');
    tipologiaZonaComponentsPage = new TipologiaZonaComponentsPage();
    await browser.wait(ec.visibilityOf(tipologiaZonaComponentsPage.title), 5000);
    expect(await tipologiaZonaComponentsPage.getTitle()).to.eq('myztl5App.tipologiaZona.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(tipologiaZonaComponentsPage.entities), ec.visibilityOf(tipologiaZonaComponentsPage.noResult)),
      1000
    );
  });

  it('should load create TipologiaZona page', async () => {
    await tipologiaZonaComponentsPage.clickOnCreateButton();
    tipologiaZonaUpdatePage = new TipologiaZonaUpdatePage();
    expect(await tipologiaZonaUpdatePage.getPageTitle()).to.eq('myztl5App.tipologiaZona.home.createOrEditLabel');
    await tipologiaZonaUpdatePage.cancel();
  });

  it('should create and save TipologiaZonas', async () => {
    const nbButtonsBeforeCreate = await tipologiaZonaComponentsPage.countDeleteButtons();

    await tipologiaZonaComponentsPage.clickOnCreateButton();

    await promise.all([
      tipologiaZonaUpdatePage.setNomeInput('nome'),
      tipologiaZonaUpdatePage.setRegoleCircolazioneInput('regoleCircolazione'),
      tipologiaZonaUpdatePage.statoSelectLastOption(),
    ]);

    expect(await tipologiaZonaUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');
    expect(await tipologiaZonaUpdatePage.getRegoleCircolazioneInput()).to.eq(
      'regoleCircolazione',
      'Expected RegoleCircolazione value to be equals to regoleCircolazione'
    );

    await tipologiaZonaUpdatePage.save();
    expect(await tipologiaZonaUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await tipologiaZonaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last TipologiaZona', async () => {
    const nbButtonsBeforeDelete = await tipologiaZonaComponentsPage.countDeleteButtons();
    await tipologiaZonaComponentsPage.clickOnLastDeleteButton();

    tipologiaZonaDeleteDialog = new TipologiaZonaDeleteDialog();
    expect(await tipologiaZonaDeleteDialog.getDialogTitle()).to.eq('myztl5App.tipologiaZona.delete.question');
    await tipologiaZonaDeleteDialog.clickOnConfirmButton();

    expect(await tipologiaZonaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
