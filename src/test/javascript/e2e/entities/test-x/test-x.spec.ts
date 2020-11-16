import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { TestXComponentsPage, TestXDeleteDialog, TestXUpdatePage } from './test-x.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('TestX e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testXComponentsPage: TestXComponentsPage;
  let testXUpdatePage: TestXUpdatePage;
  let testXDeleteDialog: TestXDeleteDialog;
  const fileNameToUpload = 'logo-jhipster.png';
  const fileToUpload = '../../../../../../src/main/webapp/content/images/' + fileNameToUpload;
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load TestXES', async () => {
    await navBarPage.goToEntity('test-x');
    testXComponentsPage = new TestXComponentsPage();
    await browser.wait(ec.visibilityOf(testXComponentsPage.title), 5000);
    expect(await testXComponentsPage.getTitle()).to.eq('myztl5App.testX.home.title');
    await browser.wait(ec.or(ec.visibilityOf(testXComponentsPage.entities), ec.visibilityOf(testXComponentsPage.noResult)), 1000);
  });

  it('should load create TestX page', async () => {
    await testXComponentsPage.clickOnCreateButton();
    testXUpdatePage = new TestXUpdatePage();
    expect(await testXUpdatePage.getPageTitle()).to.eq('myztl5App.testX.home.createOrEditLabel');
    await testXUpdatePage.cancel();
  });

  it('should create and save TestXES', async () => {
    const nbButtonsBeforeCreate = await testXComponentsPage.countDeleteButtons();

    await testXComponentsPage.clickOnCreateButton();

    await promise.all([
      testXUpdatePage.setXStringInput('xString'),
      testXUpdatePage.setXIntegerInput('5'),
      testXUpdatePage.setXLongInput('5'),
      testXUpdatePage.setXBigDecimalInput('5'),
      testXUpdatePage.setXFloatInput('5'),
      testXUpdatePage.setXDoubleInput('5'),
      testXUpdatePage.setXLocalDateInput('2000-12-31'),
      testXUpdatePage.setXZonedDateTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      testXUpdatePage.setXInstantInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
      testXUpdatePage.setXUUIDInput('64c99148-3908-465d-8c4a-e510e3ade974'),
      testXUpdatePage.setXBlobInput(absolutePath),
      testXUpdatePage.setXAnyBlobInput(absolutePath),
      testXUpdatePage.setXImageBlobInput(absolutePath),
      testXUpdatePage.setXTextBlobInput('xTextBlob'),
    ]);

    expect(await testXUpdatePage.getXStringInput()).to.eq('xString', 'Expected XString value to be equals to xString');
    expect(await testXUpdatePage.getXIntegerInput()).to.eq('5', 'Expected xInteger value to be equals to 5');
    expect(await testXUpdatePage.getXLongInput()).to.eq('5', 'Expected xLong value to be equals to 5');
    expect(await testXUpdatePage.getXBigDecimalInput()).to.eq('5', 'Expected xBigDecimal value to be equals to 5');
    expect(await testXUpdatePage.getXFloatInput()).to.eq('5', 'Expected xFloat value to be equals to 5');
    expect(await testXUpdatePage.getXDoubleInput()).to.eq('5', 'Expected xDouble value to be equals to 5');
    const selectedXBoolean = testXUpdatePage.getXBooleanInput();
    if (await selectedXBoolean.isSelected()) {
      await testXUpdatePage.getXBooleanInput().click();
      expect(await testXUpdatePage.getXBooleanInput().isSelected(), 'Expected xBoolean not to be selected').to.be.false;
    } else {
      await testXUpdatePage.getXBooleanInput().click();
      expect(await testXUpdatePage.getXBooleanInput().isSelected(), 'Expected xBoolean to be selected').to.be.true;
    }
    expect(await testXUpdatePage.getXLocalDateInput()).to.eq('2000-12-31', 'Expected xLocalDate value to be equals to 2000-12-31');
    expect(await testXUpdatePage.getXZonedDateTimeInput()).to.contain(
      '2001-01-01T02:30',
      'Expected xZonedDateTime value to be equals to 2000-12-31'
    );
    expect(await testXUpdatePage.getXInstantInput()).to.contain('2001-01-01T02:30', 'Expected xInstant value to be equals to 2000-12-31');
    expect(await testXUpdatePage.getXUUIDInput()).to.eq(
      '64c99148-3908-465d-8c4a-e510e3ade974',
      'Expected XUUID value to be equals to 64c99148-3908-465d-8c4a-e510e3ade974'
    );
    expect(await testXUpdatePage.getXBlobInput()).to.endsWith(fileNameToUpload, 'Expected XBlob value to be end with ' + fileNameToUpload);
    expect(await testXUpdatePage.getXAnyBlobInput()).to.endsWith(
      fileNameToUpload,
      'Expected XAnyBlob value to be end with ' + fileNameToUpload
    );
    expect(await testXUpdatePage.getXImageBlobInput()).to.endsWith(
      fileNameToUpload,
      'Expected XImageBlob value to be end with ' + fileNameToUpload
    );
    expect(await testXUpdatePage.getXTextBlobInput()).to.eq('xTextBlob', 'Expected XTextBlob value to be equals to xTextBlob');

    await testXUpdatePage.save();
    expect(await testXUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await testXComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last TestX', async () => {
    const nbButtonsBeforeDelete = await testXComponentsPage.countDeleteButtons();
    await testXComponentsPage.clickOnLastDeleteButton();

    testXDeleteDialog = new TestXDeleteDialog();
    expect(await testXDeleteDialog.getDialogTitle()).to.eq('myztl5App.testX.delete.question');
    await testXDeleteDialog.clickOnConfirmButton();

    expect(await testXComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
