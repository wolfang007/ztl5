import { element, by, ElementFinder } from 'protractor';

export class VarcoComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-varco div table .btn-danger'));
  title = element.all(by.css('jhi-varco div h2#page-heading span')).first();
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

export class VarcoUpdatePage {
  pageTitle = element(by.id('jhi-varco-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  codiceInput = element(by.id('field_codice'));
  descrizionePosizioneInput = element(by.id('field_descrizionePosizione'));
  statoSelect = element(by.id('field_stato'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setCodiceInput(codice: string): Promise<void> {
    await this.codiceInput.sendKeys(codice);
  }

  async getCodiceInput(): Promise<string> {
    return await this.codiceInput.getAttribute('value');
  }

  async setDescrizionePosizioneInput(descrizionePosizione: string): Promise<void> {
    await this.descrizionePosizioneInput.sendKeys(descrizionePosizione);
  }

  async getDescrizionePosizioneInput(): Promise<string> {
    return await this.descrizionePosizioneInput.getAttribute('value');
  }

  async setStatoSelect(stato: string): Promise<void> {
    await this.statoSelect.sendKeys(stato);
  }

  async getStatoSelect(): Promise<string> {
    return await this.statoSelect.element(by.css('option:checked')).getText();
  }

  async statoSelectLastOption(): Promise<void> {
    await this.statoSelect.all(by.tagName('option')).last().click();
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

export class VarcoDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-varco-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-varco'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
