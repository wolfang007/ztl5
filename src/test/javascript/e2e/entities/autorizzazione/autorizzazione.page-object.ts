import { element, by, ElementFinder } from 'protractor';

export class AutorizzazioneComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-autorizzazione div table .btn-danger'));
  title = element.all(by.css('jhi-autorizzazione div h2#page-heading span')).first();
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

export class AutorizzazioneUpdatePage {
  pageTitle = element(by.id('jhi-autorizzazione-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  nomeInput = element(by.id('field_nome'));
  descrizioneInput = element(by.id('field_descrizione'));
  statoSelect = element(by.id('field_stato'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setNomeInput(nome: string): Promise<void> {
    await this.nomeInput.sendKeys(nome);
  }

  async getNomeInput(): Promise<string> {
    return await this.nomeInput.getAttribute('value');
  }

  async setDescrizioneInput(descrizione: string): Promise<void> {
    await this.descrizioneInput.sendKeys(descrizione);
  }

  async getDescrizioneInput(): Promise<string> {
    return await this.descrizioneInput.getAttribute('value');
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

export class AutorizzazioneDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-autorizzazione-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-autorizzazione'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
