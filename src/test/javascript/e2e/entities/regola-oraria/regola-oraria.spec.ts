import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { RegolaOrariaComponentsPage, RegolaOrariaDeleteDialog, RegolaOrariaUpdatePage } from './regola-oraria.page-object';

const expect = chai.expect;

describe('RegolaOraria e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let regolaOrariaComponentsPage: RegolaOrariaComponentsPage;
  let regolaOrariaUpdatePage: RegolaOrariaUpdatePage;
  let regolaOrariaDeleteDialog: RegolaOrariaDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load RegolaOrarias', async () => {
    await navBarPage.goToEntity('regola-oraria');
    regolaOrariaComponentsPage = new RegolaOrariaComponentsPage();
    await browser.wait(ec.visibilityOf(regolaOrariaComponentsPage.title), 5000);
    expect(await regolaOrariaComponentsPage.getTitle()).to.eq('myztl5App.regolaOraria.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(regolaOrariaComponentsPage.entities), ec.visibilityOf(regolaOrariaComponentsPage.noResult)),
      1000
    );
  });

  it('should load create RegolaOraria page', async () => {
    await regolaOrariaComponentsPage.clickOnCreateButton();
    regolaOrariaUpdatePage = new RegolaOrariaUpdatePage();
    expect(await regolaOrariaUpdatePage.getPageTitle()).to.eq('myztl5App.regolaOraria.home.createOrEditLabel');
    await regolaOrariaUpdatePage.cancel();
  });

  it('should create and save RegolaOrarias', async () => {
    const nbButtonsBeforeCreate = await regolaOrariaComponentsPage.countDeleteButtons();

    await regolaOrariaComponentsPage.clickOnCreateButton();

    await promise.all([
      regolaOrariaUpdatePage.setNomeInput('nome'),
      regolaOrariaUpdatePage.oraInizioSelectLastOption(),
      regolaOrariaUpdatePage.oraFineSelectLastOption(),
      regolaOrariaUpdatePage.minutiInizioSelectLastOption(),
      regolaOrariaUpdatePage.minutiFineSelectLastOption(),
      regolaOrariaUpdatePage.statoSelectLastOption(),
      // regolaOrariaUpdatePage.tipologiaVeicoloSelectLastOption(),
    ]);

    expect(await regolaOrariaUpdatePage.getNomeInput()).to.eq('nome', 'Expected Nome value to be equals to nome');
    const selectedLunedi = regolaOrariaUpdatePage.getLunediInput();
    if (await selectedLunedi.isSelected()) {
      await regolaOrariaUpdatePage.getLunediInput().click();
      expect(await regolaOrariaUpdatePage.getLunediInput().isSelected(), 'Expected lunedi not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getLunediInput().click();
      expect(await regolaOrariaUpdatePage.getLunediInput().isSelected(), 'Expected lunedi to be selected').to.be.true;
    }
    const selectedMartedi = regolaOrariaUpdatePage.getMartediInput();
    if (await selectedMartedi.isSelected()) {
      await regolaOrariaUpdatePage.getMartediInput().click();
      expect(await regolaOrariaUpdatePage.getMartediInput().isSelected(), 'Expected martedi not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getMartediInput().click();
      expect(await regolaOrariaUpdatePage.getMartediInput().isSelected(), 'Expected martedi to be selected').to.be.true;
    }
    const selectedMercoledi = regolaOrariaUpdatePage.getMercolediInput();
    if (await selectedMercoledi.isSelected()) {
      await regolaOrariaUpdatePage.getMercolediInput().click();
      expect(await regolaOrariaUpdatePage.getMercolediInput().isSelected(), 'Expected mercoledi not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getMercolediInput().click();
      expect(await regolaOrariaUpdatePage.getMercolediInput().isSelected(), 'Expected mercoledi to be selected').to.be.true;
    }
    const selectedGiovedi = regolaOrariaUpdatePage.getGiovediInput();
    if (await selectedGiovedi.isSelected()) {
      await regolaOrariaUpdatePage.getGiovediInput().click();
      expect(await regolaOrariaUpdatePage.getGiovediInput().isSelected(), 'Expected giovedi not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getGiovediInput().click();
      expect(await regolaOrariaUpdatePage.getGiovediInput().isSelected(), 'Expected giovedi to be selected').to.be.true;
    }
    const selectedVenerdi = regolaOrariaUpdatePage.getVenerdiInput();
    if (await selectedVenerdi.isSelected()) {
      await regolaOrariaUpdatePage.getVenerdiInput().click();
      expect(await regolaOrariaUpdatePage.getVenerdiInput().isSelected(), 'Expected venerdi not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getVenerdiInput().click();
      expect(await regolaOrariaUpdatePage.getVenerdiInput().isSelected(), 'Expected venerdi to be selected').to.be.true;
    }
    const selectedSabato = regolaOrariaUpdatePage.getSabatoInput();
    if (await selectedSabato.isSelected()) {
      await regolaOrariaUpdatePage.getSabatoInput().click();
      expect(await regolaOrariaUpdatePage.getSabatoInput().isSelected(), 'Expected sabato not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getSabatoInput().click();
      expect(await regolaOrariaUpdatePage.getSabatoInput().isSelected(), 'Expected sabato to be selected').to.be.true;
    }
    const selectedDomenica = regolaOrariaUpdatePage.getDomenicaInput();
    if (await selectedDomenica.isSelected()) {
      await regolaOrariaUpdatePage.getDomenicaInput().click();
      expect(await regolaOrariaUpdatePage.getDomenicaInput().isSelected(), 'Expected domenica not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getDomenicaInput().click();
      expect(await regolaOrariaUpdatePage.getDomenicaInput().isSelected(), 'Expected domenica to be selected').to.be.true;
    }
    const selectedFestivi = regolaOrariaUpdatePage.getFestiviInput();
    if (await selectedFestivi.isSelected()) {
      await regolaOrariaUpdatePage.getFestiviInput().click();
      expect(await regolaOrariaUpdatePage.getFestiviInput().isSelected(), 'Expected festivi not to be selected').to.be.false;
    } else {
      await regolaOrariaUpdatePage.getFestiviInput().click();
      expect(await regolaOrariaUpdatePage.getFestiviInput().isSelected(), 'Expected festivi to be selected').to.be.true;
    }

    await regolaOrariaUpdatePage.save();
    expect(await regolaOrariaUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await regolaOrariaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last RegolaOraria', async () => {
    const nbButtonsBeforeDelete = await regolaOrariaComponentsPage.countDeleteButtons();
    await regolaOrariaComponentsPage.clickOnLastDeleteButton();

    regolaOrariaDeleteDialog = new RegolaOrariaDeleteDialog();
    expect(await regolaOrariaDeleteDialog.getDialogTitle()).to.eq('myztl5App.regolaOraria.delete.question');
    await regolaOrariaDeleteDialog.clickOnConfirmButton();

    expect(await regolaOrariaComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
