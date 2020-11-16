import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
  CalendarizzazioneComponentsPage,
  CalendarizzazioneDeleteDialog,
  CalendarizzazioneUpdatePage,
} from './calendarizzazione.page-object';

const expect = chai.expect;

describe('Calendarizzazione e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let calendarizzazioneComponentsPage: CalendarizzazioneComponentsPage;
  let calendarizzazioneUpdatePage: CalendarizzazioneUpdatePage;
  let calendarizzazioneDeleteDialog: CalendarizzazioneDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load Calendarizzaziones', async () => {
    await navBarPage.goToEntity('calendarizzazione');
    calendarizzazioneComponentsPage = new CalendarizzazioneComponentsPage();
    await browser.wait(ec.visibilityOf(calendarizzazioneComponentsPage.title), 5000);
    expect(await calendarizzazioneComponentsPage.getTitle()).to.eq('myztl5App.calendarizzazione.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(calendarizzazioneComponentsPage.entities), ec.visibilityOf(calendarizzazioneComponentsPage.noResult)),
      1000
    );
  });

  it('should load create Calendarizzazione page', async () => {
    await calendarizzazioneComponentsPage.clickOnCreateButton();
    calendarizzazioneUpdatePage = new CalendarizzazioneUpdatePage();
    expect(await calendarizzazioneUpdatePage.getPageTitle()).to.eq('myztl5App.calendarizzazione.home.createOrEditLabel');
    await calendarizzazioneUpdatePage.cancel();
  });

  it('should create and save Calendarizzaziones', async () => {
    const nbButtonsBeforeCreate = await calendarizzazioneComponentsPage.countDeleteButtons();

    await calendarizzazioneComponentsPage.clickOnCreateButton();

    await promise.all([]);

    const selectedLunedi = calendarizzazioneUpdatePage.getLunediInput();
    if (await selectedLunedi.isSelected()) {
      await calendarizzazioneUpdatePage.getLunediInput().click();
      expect(await calendarizzazioneUpdatePage.getLunediInput().isSelected(), 'Expected lunedi not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getLunediInput().click();
      expect(await calendarizzazioneUpdatePage.getLunediInput().isSelected(), 'Expected lunedi to be selected').to.be.true;
    }
    const selectedMartedi = calendarizzazioneUpdatePage.getMartediInput();
    if (await selectedMartedi.isSelected()) {
      await calendarizzazioneUpdatePage.getMartediInput().click();
      expect(await calendarizzazioneUpdatePage.getMartediInput().isSelected(), 'Expected martedi not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getMartediInput().click();
      expect(await calendarizzazioneUpdatePage.getMartediInput().isSelected(), 'Expected martedi to be selected').to.be.true;
    }
    const selectedMercoledi = calendarizzazioneUpdatePage.getMercolediInput();
    if (await selectedMercoledi.isSelected()) {
      await calendarizzazioneUpdatePage.getMercolediInput().click();
      expect(await calendarizzazioneUpdatePage.getMercolediInput().isSelected(), 'Expected mercoledi not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getMercolediInput().click();
      expect(await calendarizzazioneUpdatePage.getMercolediInput().isSelected(), 'Expected mercoledi to be selected').to.be.true;
    }
    const selectedGiovedi = calendarizzazioneUpdatePage.getGiovediInput();
    if (await selectedGiovedi.isSelected()) {
      await calendarizzazioneUpdatePage.getGiovediInput().click();
      expect(await calendarizzazioneUpdatePage.getGiovediInput().isSelected(), 'Expected giovedi not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getGiovediInput().click();
      expect(await calendarizzazioneUpdatePage.getGiovediInput().isSelected(), 'Expected giovedi to be selected').to.be.true;
    }
    const selectedVenerdi = calendarizzazioneUpdatePage.getVenerdiInput();
    if (await selectedVenerdi.isSelected()) {
      await calendarizzazioneUpdatePage.getVenerdiInput().click();
      expect(await calendarizzazioneUpdatePage.getVenerdiInput().isSelected(), 'Expected venerdi not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getVenerdiInput().click();
      expect(await calendarizzazioneUpdatePage.getVenerdiInput().isSelected(), 'Expected venerdi to be selected').to.be.true;
    }
    const selectedSabato = calendarizzazioneUpdatePage.getSabatoInput();
    if (await selectedSabato.isSelected()) {
      await calendarizzazioneUpdatePage.getSabatoInput().click();
      expect(await calendarizzazioneUpdatePage.getSabatoInput().isSelected(), 'Expected sabato not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getSabatoInput().click();
      expect(await calendarizzazioneUpdatePage.getSabatoInput().isSelected(), 'Expected sabato to be selected').to.be.true;
    }
    const selectedDomenica = calendarizzazioneUpdatePage.getDomenicaInput();
    if (await selectedDomenica.isSelected()) {
      await calendarizzazioneUpdatePage.getDomenicaInput().click();
      expect(await calendarizzazioneUpdatePage.getDomenicaInput().isSelected(), 'Expected domenica not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getDomenicaInput().click();
      expect(await calendarizzazioneUpdatePage.getDomenicaInput().isSelected(), 'Expected domenica to be selected').to.be.true;
    }
    const selectedSiRipete = calendarizzazioneUpdatePage.getSiRipeteInput();
    if (await selectedSiRipete.isSelected()) {
      await calendarizzazioneUpdatePage.getSiRipeteInput().click();
      expect(await calendarizzazioneUpdatePage.getSiRipeteInput().isSelected(), 'Expected siRipete not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getSiRipeteInput().click();
      expect(await calendarizzazioneUpdatePage.getSiRipeteInput().isSelected(), 'Expected siRipete to be selected').to.be.true;
    }
    const selectedFestivi = calendarizzazioneUpdatePage.getFestiviInput();
    if (await selectedFestivi.isSelected()) {
      await calendarizzazioneUpdatePage.getFestiviInput().click();
      expect(await calendarizzazioneUpdatePage.getFestiviInput().isSelected(), 'Expected festivi not to be selected').to.be.false;
    } else {
      await calendarizzazioneUpdatePage.getFestiviInput().click();
      expect(await calendarizzazioneUpdatePage.getFestiviInput().isSelected(), 'Expected festivi to be selected').to.be.true;
    }

    await calendarizzazioneUpdatePage.save();
    expect(await calendarizzazioneUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await calendarizzazioneComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last Calendarizzazione', async () => {
    const nbButtonsBeforeDelete = await calendarizzazioneComponentsPage.countDeleteButtons();
    await calendarizzazioneComponentsPage.clickOnLastDeleteButton();

    calendarizzazioneDeleteDialog = new CalendarizzazioneDeleteDialog();
    expect(await calendarizzazioneDeleteDialog.getDialogTitle()).to.eq('myztl5App.calendarizzazione.delete.question');
    await calendarizzazioneDeleteDialog.clickOnConfirmButton();

    expect(await calendarizzazioneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
