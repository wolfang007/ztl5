import { element, by, ElementFinder } from 'protractor';

export class CalendarizzazioneComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-calendarizzazione div table .btn-danger'));
  title = element.all(by.css('jhi-calendarizzazione div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class CalendarizzazioneUpdatePage {
  pageTitle = element(by.id('jhi-calendarizzazione-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  lunediInput = element(by.id('field_lunedi'));
  martediInput = element(by.id('field_martedi'));
  mercolediInput = element(by.id('field_mercoledi'));
  giovediInput = element(by.id('field_giovedi'));
  venerdiInput = element(by.id('field_venerdi'));
  sabatoInput = element(by.id('field_sabato'));
  domenicaInput = element(by.id('field_domenica'));
  siRipeteInput = element(by.id('field_siRipete'));
  festiviInput = element(by.id('field_festivi'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  getLunediInput(): ElementFinder {
    return this.lunediInput;
  }

  getMartediInput(): ElementFinder {
    return this.martediInput;
  }

  getMercolediInput(): ElementFinder {
    return this.mercolediInput;
  }

  getGiovediInput(): ElementFinder {
    return this.giovediInput;
  }

  getVenerdiInput(): ElementFinder {
    return this.venerdiInput;
  }

  getSabatoInput(): ElementFinder {
    return this.sabatoInput;
  }

  getDomenicaInput(): ElementFinder {
    return this.domenicaInput;
  }

  getSiRipeteInput(): ElementFinder {
    return this.siRipeteInput;
  }

  getFestiviInput(): ElementFinder {
    return this.festiviInput;
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class CalendarizzazioneDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-calendarizzazione-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-calendarizzazione'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
