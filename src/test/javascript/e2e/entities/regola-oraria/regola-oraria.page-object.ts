import { element, by, ElementFinder } from 'protractor';

export class RegolaOrariaComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-regola-oraria div table .btn-danger'));
  title = element.all(by.css('jhi-regola-oraria div h2#page-heading span')).first();
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

export class RegolaOrariaUpdatePage {
  pageTitle = element(by.id('jhi-regola-oraria-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  nomeInput = element(by.id('field_nome'));
  oraInizioSelect = element(by.id('field_oraInizio'));
  oraFineSelect = element(by.id('field_oraFine'));
  minutiInizioSelect = element(by.id('field_minutiInizio'));
  minutiFineSelect = element(by.id('field_minutiFine'));
  lunediInput = element(by.id('field_lunedi'));
  martediInput = element(by.id('field_martedi'));
  mercolediInput = element(by.id('field_mercoledi'));
  giovediInput = element(by.id('field_giovedi'));
  venerdiInput = element(by.id('field_venerdi'));
  sabatoInput = element(by.id('field_sabato'));
  domenicaInput = element(by.id('field_domenica'));
  festiviInput = element(by.id('field_festivi'));
  statoSelect = element(by.id('field_stato'));

  tipologiaVeicoloSelect = element(by.id('field_tipologiaVeicolo'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setNomeInput(nome: string): Promise<void> {
    await this.nomeInput.sendKeys(nome);
  }

  async getNomeInput(): Promise<string> {
    return await this.nomeInput.getAttribute('value');
  }

  async setOraInizioSelect(oraInizio: string): Promise<void> {
    await this.oraInizioSelect.sendKeys(oraInizio);
  }

  async getOraInizioSelect(): Promise<string> {
    return await this.oraInizioSelect.element(by.css('option:checked')).getText();
  }

  async oraInizioSelectLastOption(): Promise<void> {
    await this.oraInizioSelect.all(by.tagName('option')).last().click();
  }

  async setOraFineSelect(oraFine: string): Promise<void> {
    await this.oraFineSelect.sendKeys(oraFine);
  }

  async getOraFineSelect(): Promise<string> {
    return await this.oraFineSelect.element(by.css('option:checked')).getText();
  }

  async oraFineSelectLastOption(): Promise<void> {
    await this.oraFineSelect.all(by.tagName('option')).last().click();
  }

  async setMinutiInizioSelect(minutiInizio: string): Promise<void> {
    await this.minutiInizioSelect.sendKeys(minutiInizio);
  }

  async getMinutiInizioSelect(): Promise<string> {
    return await this.minutiInizioSelect.element(by.css('option:checked')).getText();
  }

  async minutiInizioSelectLastOption(): Promise<void> {
    await this.minutiInizioSelect.all(by.tagName('option')).last().click();
  }

  async setMinutiFineSelect(minutiFine: string): Promise<void> {
    await this.minutiFineSelect.sendKeys(minutiFine);
  }

  async getMinutiFineSelect(): Promise<string> {
    return await this.minutiFineSelect.element(by.css('option:checked')).getText();
  }

  async minutiFineSelectLastOption(): Promise<void> {
    await this.minutiFineSelect.all(by.tagName('option')).last().click();
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

  getFestiviInput(): ElementFinder {
    return this.festiviInput;
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

  async tipologiaVeicoloSelectLastOption(): Promise<void> {
    await this.tipologiaVeicoloSelect.all(by.tagName('option')).last().click();
  }

  async tipologiaVeicoloSelectOption(option: string): Promise<void> {
    await this.tipologiaVeicoloSelect.sendKeys(option);
  }

  getTipologiaVeicoloSelect(): ElementFinder {
    return this.tipologiaVeicoloSelect;
  }

  async getTipologiaVeicoloSelectedOption(): Promise<string> {
    return await this.tipologiaVeicoloSelect.element(by.css('option:checked')).getText();
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

export class RegolaOrariaDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-regolaOraria-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-regolaOraria'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
