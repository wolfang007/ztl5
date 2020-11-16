import { element, by, ElementFinder } from 'protractor';

export class ZonaComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-zona div table .btn-danger'));
  title = element.all(by.css('jhi-zona div h2#page-heading span')).first();
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

export class ZonaUpdatePage {
  pageTitle = element(by.id('jhi-zona-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  nomeInput = element(by.id('field_nome'));
  statoSelect = element(by.id('field_stato'));

  profiloOrarioSelect = element(by.id('field_profiloOrario'));
  tipologiaZonaSelect = element(by.id('field_tipologiaZona'));
  gruppoVarchiSelect = element(by.id('field_gruppoVarchi'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setNomeInput(nome: string): Promise<void> {
    await this.nomeInput.sendKeys(nome);
  }

  async getNomeInput(): Promise<string> {
    return await this.nomeInput.getAttribute('value');
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

  async profiloOrarioSelectLastOption(): Promise<void> {
    await this.profiloOrarioSelect.all(by.tagName('option')).last().click();
  }

  async profiloOrarioSelectOption(option: string): Promise<void> {
    await this.profiloOrarioSelect.sendKeys(option);
  }

  getProfiloOrarioSelect(): ElementFinder {
    return this.profiloOrarioSelect;
  }

  async getProfiloOrarioSelectedOption(): Promise<string> {
    return await this.profiloOrarioSelect.element(by.css('option:checked')).getText();
  }

  async tipologiaZonaSelectLastOption(): Promise<void> {
    await this.tipologiaZonaSelect.all(by.tagName('option')).last().click();
  }

  async tipologiaZonaSelectOption(option: string): Promise<void> {
    await this.tipologiaZonaSelect.sendKeys(option);
  }

  getTipologiaZonaSelect(): ElementFinder {
    return this.tipologiaZonaSelect;
  }

  async getTipologiaZonaSelectedOption(): Promise<string> {
    return await this.tipologiaZonaSelect.element(by.css('option:checked')).getText();
  }

  async gruppoVarchiSelectLastOption(): Promise<void> {
    await this.gruppoVarchiSelect.all(by.tagName('option')).last().click();
  }

  async gruppoVarchiSelectOption(option: string): Promise<void> {
    await this.gruppoVarchiSelect.sendKeys(option);
  }

  getGruppoVarchiSelect(): ElementFinder {
    return this.gruppoVarchiSelect;
  }

  async getGruppoVarchiSelectedOption(): Promise<string> {
    return await this.gruppoVarchiSelect.element(by.css('option:checked')).getText();
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

export class ZonaDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-zona-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-zona'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
