import { element, by, ElementFinder } from 'protractor';

export class PermessoTemporaneoComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-permesso-temporaneo div table .btn-danger'));
  title = element.all(by.css('jhi-permesso-temporaneo div h2#page-heading span')).first();
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

export class PermessoTemporaneoUpdatePage {
  pageTitle = element(by.id('jhi-permesso-temporaneo-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  targaInput = element(by.id('field_targa'));
  domicilioDigitaleInput = element(by.id('field_domicilioDigitale'));
  tipoPersonaSelect = element(by.id('field_tipoPersona'));
  nomeRichiedenteInput = element(by.id('field_nomeRichiedente'));
  cognomeRichiedenteInput = element(by.id('field_cognomeRichiedente'));
  ragioneSocialeInput = element(by.id('field_ragioneSociale'));
  codiceFiscaleRichiedenteInput = element(by.id('field_codiceFiscaleRichiedente'));
  partitaIvaInput = element(by.id('field_partitaIva'));
  dataInizioInput = element(by.id('field_dataInizio'));
  impostaDiBolloInput = element(by.id('field_impostaDiBollo'));
  costoInput = element(by.id('field_costo'));
  copiaFirmataInput = element(by.id('file_copiaFirmata'));
  documentoRiconoscimentoInput = element(by.id('file_documentoRiconoscimento'));
  pagatoInput = element(by.id('field_pagato'));
  protocolloInput = element(by.id('field_protocollo'));

  calendarioSelect = element(by.id('field_calendario'));
  tipoPermessoSelect = element(by.id('field_tipoPermesso'));
  durataSelect = element(by.id('field_durata'));
  nomeSelect = element(by.id('field_nome'));
  motivazioneSelect = element(by.id('field_motivazione'));
  autorizzazioniSelect = element(by.id('field_autorizzazioni'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setTargaInput(targa: string): Promise<void> {
    await this.targaInput.sendKeys(targa);
  }

  async getTargaInput(): Promise<string> {
    return await this.targaInput.getAttribute('value');
  }

  async setDomicilioDigitaleInput(domicilioDigitale: string): Promise<void> {
    await this.domicilioDigitaleInput.sendKeys(domicilioDigitale);
  }

  async getDomicilioDigitaleInput(): Promise<string> {
    return await this.domicilioDigitaleInput.getAttribute('value');
  }

  async setTipoPersonaSelect(tipoPersona: string): Promise<void> {
    await this.tipoPersonaSelect.sendKeys(tipoPersona);
  }

  async getTipoPersonaSelect(): Promise<string> {
    return await this.tipoPersonaSelect.element(by.css('option:checked')).getText();
  }

  async tipoPersonaSelectLastOption(): Promise<void> {
    await this.tipoPersonaSelect.all(by.tagName('option')).last().click();
  }

  async setNomeRichiedenteInput(nomeRichiedente: string): Promise<void> {
    await this.nomeRichiedenteInput.sendKeys(nomeRichiedente);
  }

  async getNomeRichiedenteInput(): Promise<string> {
    return await this.nomeRichiedenteInput.getAttribute('value');
  }

  async setCognomeRichiedenteInput(cognomeRichiedente: string): Promise<void> {
    await this.cognomeRichiedenteInput.sendKeys(cognomeRichiedente);
  }

  async getCognomeRichiedenteInput(): Promise<string> {
    return await this.cognomeRichiedenteInput.getAttribute('value');
  }

  async setRagioneSocialeInput(ragioneSociale: string): Promise<void> {
    await this.ragioneSocialeInput.sendKeys(ragioneSociale);
  }

  async getRagioneSocialeInput(): Promise<string> {
    return await this.ragioneSocialeInput.getAttribute('value');
  }

  async setCodiceFiscaleRichiedenteInput(codiceFiscaleRichiedente: string): Promise<void> {
    await this.codiceFiscaleRichiedenteInput.sendKeys(codiceFiscaleRichiedente);
  }

  async getCodiceFiscaleRichiedenteInput(): Promise<string> {
    return await this.codiceFiscaleRichiedenteInput.getAttribute('value');
  }

  async setPartitaIvaInput(partitaIva: string): Promise<void> {
    await this.partitaIvaInput.sendKeys(partitaIva);
  }

  async getPartitaIvaInput(): Promise<string> {
    return await this.partitaIvaInput.getAttribute('value');
  }

  async setDataInizioInput(dataInizio: string): Promise<void> {
    await this.dataInizioInput.sendKeys(dataInizio);
  }

  async getDataInizioInput(): Promise<string> {
    return await this.dataInizioInput.getAttribute('value');
  }

  getImpostaDiBolloInput(): ElementFinder {
    return this.impostaDiBolloInput;
  }

  async setCostoInput(costo: string): Promise<void> {
    await this.costoInput.sendKeys(costo);
  }

  async getCostoInput(): Promise<string> {
    return await this.costoInput.getAttribute('value');
  }

  async setCopiaFirmataInput(copiaFirmata: string): Promise<void> {
    await this.copiaFirmataInput.sendKeys(copiaFirmata);
  }

  async getCopiaFirmataInput(): Promise<string> {
    return await this.copiaFirmataInput.getAttribute('value');
  }

  async setDocumentoRiconoscimentoInput(documentoRiconoscimento: string): Promise<void> {
    await this.documentoRiconoscimentoInput.sendKeys(documentoRiconoscimento);
  }

  async getDocumentoRiconoscimentoInput(): Promise<string> {
    return await this.documentoRiconoscimentoInput.getAttribute('value');
  }

  getPagatoInput(): ElementFinder {
    return this.pagatoInput;
  }

  async setProtocolloInput(protocollo: string): Promise<void> {
    await this.protocolloInput.sendKeys(protocollo);
  }

  async getProtocolloInput(): Promise<string> {
    return await this.protocolloInput.getAttribute('value');
  }

  async calendarioSelectLastOption(): Promise<void> {
    await this.calendarioSelect.all(by.tagName('option')).last().click();
  }

  async calendarioSelectOption(option: string): Promise<void> {
    await this.calendarioSelect.sendKeys(option);
  }

  getCalendarioSelect(): ElementFinder {
    return this.calendarioSelect;
  }

  async getCalendarioSelectedOption(): Promise<string> {
    return await this.calendarioSelect.element(by.css('option:checked')).getText();
  }

  async tipoPermessoSelectLastOption(): Promise<void> {
    await this.tipoPermessoSelect.all(by.tagName('option')).last().click();
  }

  async tipoPermessoSelectOption(option: string): Promise<void> {
    await this.tipoPermessoSelect.sendKeys(option);
  }

  getTipoPermessoSelect(): ElementFinder {
    return this.tipoPermessoSelect;
  }

  async getTipoPermessoSelectedOption(): Promise<string> {
    return await this.tipoPermessoSelect.element(by.css('option:checked')).getText();
  }

  async durataSelectLastOption(): Promise<void> {
    await this.durataSelect.all(by.tagName('option')).last().click();
  }

  async durataSelectOption(option: string): Promise<void> {
    await this.durataSelect.sendKeys(option);
  }

  getDurataSelect(): ElementFinder {
    return this.durataSelect;
  }

  async getDurataSelectedOption(): Promise<string> {
    return await this.durataSelect.element(by.css('option:checked')).getText();
  }

  async nomeSelectLastOption(): Promise<void> {
    await this.nomeSelect.all(by.tagName('option')).last().click();
  }

  async nomeSelectOption(option: string): Promise<void> {
    await this.nomeSelect.sendKeys(option);
  }

  getNomeSelect(): ElementFinder {
    return this.nomeSelect;
  }

  async getNomeSelectedOption(): Promise<string> {
    return await this.nomeSelect.element(by.css('option:checked')).getText();
  }

  async motivazioneSelectLastOption(): Promise<void> {
    await this.motivazioneSelect.all(by.tagName('option')).last().click();
  }

  async motivazioneSelectOption(option: string): Promise<void> {
    await this.motivazioneSelect.sendKeys(option);
  }

  getMotivazioneSelect(): ElementFinder {
    return this.motivazioneSelect;
  }

  async getMotivazioneSelectedOption(): Promise<string> {
    return await this.motivazioneSelect.element(by.css('option:checked')).getText();
  }

  async autorizzazioniSelectLastOption(): Promise<void> {
    await this.autorizzazioniSelect.all(by.tagName('option')).last().click();
  }

  async autorizzazioniSelectOption(option: string): Promise<void> {
    await this.autorizzazioniSelect.sendKeys(option);
  }

  getAutorizzazioniSelect(): ElementFinder {
    return this.autorizzazioniSelect;
  }

  async getAutorizzazioniSelectedOption(): Promise<string> {
    return await this.autorizzazioniSelect.element(by.css('option:checked')).getText();
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

export class PermessoTemporaneoDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-permessoTemporaneo-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-permessoTemporaneo'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
