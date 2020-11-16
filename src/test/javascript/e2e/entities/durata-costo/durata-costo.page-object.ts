import { element, by, ElementFinder } from 'protractor';

export class DurataCostoComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-durata-costo div table .btn-danger'));
  title = element.all(by.css('jhi-durata-costo div h2#page-heading span')).first();
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

export class DurataCostoUpdatePage {
  pageTitle = element(by.id('jhi-durata-costo-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  durataInput = element(by.id('field_durata'));
  descrizioneInput = element(by.id('field_descrizione'));
  costoInput = element(by.id('field_costo'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDurataInput(durata: string): Promise<void> {
    await this.durataInput.sendKeys(durata);
  }

  async getDurataInput(): Promise<string> {
    return await this.durataInput.getAttribute('value');
  }

  async setDescrizioneInput(descrizione: string): Promise<void> {
    await this.descrizioneInput.sendKeys(descrizione);
  }

  async getDescrizioneInput(): Promise<string> {
    return await this.descrizioneInput.getAttribute('value');
  }

  async setCostoInput(costo: string): Promise<void> {
    await this.costoInput.sendKeys(costo);
  }

  async getCostoInput(): Promise<string> {
    return await this.costoInput.getAttribute('value');
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

export class DurataCostoDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-durataCosto-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-durataCosto'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
