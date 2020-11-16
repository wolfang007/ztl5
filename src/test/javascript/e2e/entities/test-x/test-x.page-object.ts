import { element, by, ElementFinder } from 'protractor';

export class TestXComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-test-x div table .btn-danger'));
  title = element.all(by.css('jhi-test-x div h2#page-heading span')).first();
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

export class TestXUpdatePage {
  pageTitle = element(by.id('jhi-test-x-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  xStringInput = element(by.id('field_xString'));
  xIntegerInput = element(by.id('field_xInteger'));
  xLongInput = element(by.id('field_xLong'));
  xBigDecimalInput = element(by.id('field_xBigDecimal'));
  xFloatInput = element(by.id('field_xFloat'));
  xDoubleInput = element(by.id('field_xDouble'));
  xBooleanInput = element(by.id('field_xBoolean'));
  xLocalDateInput = element(by.id('field_xLocalDate'));
  xZonedDateTimeInput = element(by.id('field_xZonedDateTime'));
  xInstantInput = element(by.id('field_xInstant'));
  xUUIDInput = element(by.id('field_xUUID'));
  xBlobInput = element(by.id('file_xBlob'));
  xAnyBlobInput = element(by.id('file_xAnyBlob'));
  xImageBlobInput = element(by.id('file_xImageBlob'));
  xTextBlobInput = element(by.id('field_xTextBlob'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setXStringInput(xString: string): Promise<void> {
    await this.xStringInput.sendKeys(xString);
  }

  async getXStringInput(): Promise<string> {
    return await this.xStringInput.getAttribute('value');
  }

  async setXIntegerInput(xInteger: string): Promise<void> {
    await this.xIntegerInput.sendKeys(xInteger);
  }

  async getXIntegerInput(): Promise<string> {
    return await this.xIntegerInput.getAttribute('value');
  }

  async setXLongInput(xLong: string): Promise<void> {
    await this.xLongInput.sendKeys(xLong);
  }

  async getXLongInput(): Promise<string> {
    return await this.xLongInput.getAttribute('value');
  }

  async setXBigDecimalInput(xBigDecimal: string): Promise<void> {
    await this.xBigDecimalInput.sendKeys(xBigDecimal);
  }

  async getXBigDecimalInput(): Promise<string> {
    return await this.xBigDecimalInput.getAttribute('value');
  }

  async setXFloatInput(xFloat: string): Promise<void> {
    await this.xFloatInput.sendKeys(xFloat);
  }

  async getXFloatInput(): Promise<string> {
    return await this.xFloatInput.getAttribute('value');
  }

  async setXDoubleInput(xDouble: string): Promise<void> {
    await this.xDoubleInput.sendKeys(xDouble);
  }

  async getXDoubleInput(): Promise<string> {
    return await this.xDoubleInput.getAttribute('value');
  }

  getXBooleanInput(): ElementFinder {
    return this.xBooleanInput;
  }

  async setXLocalDateInput(xLocalDate: string): Promise<void> {
    await this.xLocalDateInput.sendKeys(xLocalDate);
  }

  async getXLocalDateInput(): Promise<string> {
    return await this.xLocalDateInput.getAttribute('value');
  }

  async setXZonedDateTimeInput(xZonedDateTime: string): Promise<void> {
    await this.xZonedDateTimeInput.sendKeys(xZonedDateTime);
  }

  async getXZonedDateTimeInput(): Promise<string> {
    return await this.xZonedDateTimeInput.getAttribute('value');
  }

  async setXInstantInput(xInstant: string): Promise<void> {
    await this.xInstantInput.sendKeys(xInstant);
  }

  async getXInstantInput(): Promise<string> {
    return await this.xInstantInput.getAttribute('value');
  }

  async setXUUIDInput(xUUID: string): Promise<void> {
    await this.xUUIDInput.sendKeys(xUUID);
  }

  async getXUUIDInput(): Promise<string> {
    return await this.xUUIDInput.getAttribute('value');
  }

  async setXBlobInput(xBlob: string): Promise<void> {
    await this.xBlobInput.sendKeys(xBlob);
  }

  async getXBlobInput(): Promise<string> {
    return await this.xBlobInput.getAttribute('value');
  }

  async setXAnyBlobInput(xAnyBlob: string): Promise<void> {
    await this.xAnyBlobInput.sendKeys(xAnyBlob);
  }

  async getXAnyBlobInput(): Promise<string> {
    return await this.xAnyBlobInput.getAttribute('value');
  }

  async setXImageBlobInput(xImageBlob: string): Promise<void> {
    await this.xImageBlobInput.sendKeys(xImageBlob);
  }

  async getXImageBlobInput(): Promise<string> {
    return await this.xImageBlobInput.getAttribute('value');
  }

  async setXTextBlobInput(xTextBlob: string): Promise<void> {
    await this.xTextBlobInput.sendKeys(xTextBlob);
  }

  async getXTextBlobInput(): Promise<string> {
    return await this.xTextBlobInput.getAttribute('value');
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

export class TestXDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-testX-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-testX'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
