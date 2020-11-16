import { element, by, ElementFinder } from 'protractor';

export class MotivazioneComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-motivazione div table .btn-danger'));
  title = element.all(by.css('jhi-motivazione div h2#page-heading span')).first();
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

export class MotivazioneUpdatePage {
  pageTitle = element(by.id('jhi-motivazione-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  descrizioneInput = element(by.id('field_descrizione'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDescrizioneInput(descrizione: string): Promise<void> {
    await this.descrizioneInput.sendKeys(descrizione);
  }

  async getDescrizioneInput(): Promise<string> {
    return await this.descrizioneInput.getAttribute('value');
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

export class MotivazioneDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-motivazione-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-motivazione'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
