import { element, by, ElementFinder } from 'protractor';

export class ProfiloOrarioComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-profilo-orario div table .btn-danger'));
  title = element.all(by.css('jhi-profilo-orario div h2#page-heading span')).first();
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

export class ProfiloOrarioUpdatePage {
  pageTitle = element(by.id('jhi-profilo-orario-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  nomeInput = element(by.id('field_nome'));
  statoSelect = element(by.id('field_stato'));

  regolaOrariaSelect = element(by.id('field_regolaOraria'));

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

  async regolaOrariaSelectLastOption(): Promise<void> {
    await this.regolaOrariaSelect.all(by.tagName('option')).last().click();
  }

  async regolaOrariaSelectOption(option: string): Promise<void> {
    await this.regolaOrariaSelect.sendKeys(option);
  }

  getRegolaOrariaSelect(): ElementFinder {
    return this.regolaOrariaSelect;
  }

  async getRegolaOrariaSelectedOption(): Promise<string> {
    return await this.regolaOrariaSelect.element(by.css('option:checked')).getText();
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

export class ProfiloOrarioDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-profiloOrario-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-profiloOrario'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
