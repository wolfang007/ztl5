import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import {
  PermessoTemporaneoComponentsPage,
  PermessoTemporaneoDeleteDialog,
  PermessoTemporaneoUpdatePage,
} from './permesso-temporaneo.page-object';
import * as path from 'path';

const expect = chai.expect;

describe('PermessoTemporaneo e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let permessoTemporaneoComponentsPage: PermessoTemporaneoComponentsPage;
  let permessoTemporaneoUpdatePage: PermessoTemporaneoUpdatePage;
  let permessoTemporaneoDeleteDialog: PermessoTemporaneoDeleteDialog;
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

  it('should load PermessoTemporaneos', async () => {
    await navBarPage.goToEntity('permesso-temporaneo');
    permessoTemporaneoComponentsPage = new PermessoTemporaneoComponentsPage();
    await browser.wait(ec.visibilityOf(permessoTemporaneoComponentsPage.title), 5000);
    expect(await permessoTemporaneoComponentsPage.getTitle()).to.eq('myztl5App.permessoTemporaneo.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(permessoTemporaneoComponentsPage.entities), ec.visibilityOf(permessoTemporaneoComponentsPage.noResult)),
      1000
    );
  });

  it('should load create PermessoTemporaneo page', async () => {
    await permessoTemporaneoComponentsPage.clickOnCreateButton();
    permessoTemporaneoUpdatePage = new PermessoTemporaneoUpdatePage();
    expect(await permessoTemporaneoUpdatePage.getPageTitle()).to.eq('myztl5App.permessoTemporaneo.home.createOrEditLabel');
    await permessoTemporaneoUpdatePage.cancel();
  });

  it('should create and save PermessoTemporaneos', async () => {
    const nbButtonsBeforeCreate = await permessoTemporaneoComponentsPage.countDeleteButtons();

    await permessoTemporaneoComponentsPage.clickOnCreateButton();

    await promise.all([
      permessoTemporaneoUpdatePage.setTargaInput('targa'),
      permessoTemporaneoUpdatePage.setDomicilioDigitaleInput('domicilioDigitale'),
      permessoTemporaneoUpdatePage.tipoPersonaSelectLastOption(),
      permessoTemporaneoUpdatePage.setNomeRichiedenteInput('nomeRichiedente'),
      permessoTemporaneoUpdatePage.setCognomeRichiedenteInput('cognomeRichiedente'),
      permessoTemporaneoUpdatePage.setRagioneSocialeInput('ragioneSociale'),
      permessoTemporaneoUpdatePage.setCodiceFiscaleRichiedenteInput('codiceFiscaleRichiedente'),
      permessoTemporaneoUpdatePage.setPartitaIvaInput('partitaIva'),
      permessoTemporaneoUpdatePage.setDataInizioInput('2000-12-31'),
      permessoTemporaneoUpdatePage.setCostoInput('5'),
      permessoTemporaneoUpdatePage.setCopiaFirmataInput(absolutePath),
      permessoTemporaneoUpdatePage.setDocumentoRiconoscimentoInput(absolutePath),
      permessoTemporaneoUpdatePage.setProtocolloInput('protocollo'),
      permessoTemporaneoUpdatePage.calendarioSelectLastOption(),
      permessoTemporaneoUpdatePage.tipoPermessoSelectLastOption(),
      permessoTemporaneoUpdatePage.durataSelectLastOption(),
      permessoTemporaneoUpdatePage.nomeSelectLastOption(),
      permessoTemporaneoUpdatePage.motivazioneSelectLastOption(),
      // permessoTemporaneoUpdatePage.autorizzazioniSelectLastOption(),
    ]);

    expect(await permessoTemporaneoUpdatePage.getTargaInput()).to.eq('targa', 'Expected Targa value to be equals to targa');
    expect(await permessoTemporaneoUpdatePage.getDomicilioDigitaleInput()).to.eq(
      'domicilioDigitale',
      'Expected DomicilioDigitale value to be equals to domicilioDigitale'
    );
    expect(await permessoTemporaneoUpdatePage.getNomeRichiedenteInput()).to.eq(
      'nomeRichiedente',
      'Expected NomeRichiedente value to be equals to nomeRichiedente'
    );
    expect(await permessoTemporaneoUpdatePage.getCognomeRichiedenteInput()).to.eq(
      'cognomeRichiedente',
      'Expected CognomeRichiedente value to be equals to cognomeRichiedente'
    );
    expect(await permessoTemporaneoUpdatePage.getRagioneSocialeInput()).to.eq(
      'ragioneSociale',
      'Expected RagioneSociale value to be equals to ragioneSociale'
    );
    expect(await permessoTemporaneoUpdatePage.getCodiceFiscaleRichiedenteInput()).to.eq(
      'codiceFiscaleRichiedente',
      'Expected CodiceFiscaleRichiedente value to be equals to codiceFiscaleRichiedente'
    );
    expect(await permessoTemporaneoUpdatePage.getPartitaIvaInput()).to.eq(
      'partitaIva',
      'Expected PartitaIva value to be equals to partitaIva'
    );
    expect(await permessoTemporaneoUpdatePage.getDataInizioInput()).to.eq(
      '2000-12-31',
      'Expected dataInizio value to be equals to 2000-12-31'
    );
    const selectedImpostaDiBollo = permessoTemporaneoUpdatePage.getImpostaDiBolloInput();
    if (await selectedImpostaDiBollo.isSelected()) {
      await permessoTemporaneoUpdatePage.getImpostaDiBolloInput().click();
      expect(await permessoTemporaneoUpdatePage.getImpostaDiBolloInput().isSelected(), 'Expected impostaDiBollo not to be selected').to.be
        .false;
    } else {
      await permessoTemporaneoUpdatePage.getImpostaDiBolloInput().click();
      expect(await permessoTemporaneoUpdatePage.getImpostaDiBolloInput().isSelected(), 'Expected impostaDiBollo to be selected').to.be.true;
    }
    expect(await permessoTemporaneoUpdatePage.getCostoInput()).to.eq('5', 'Expected costo value to be equals to 5');
    expect(await permessoTemporaneoUpdatePage.getCopiaFirmataInput()).to.endsWith(
      fileNameToUpload,
      'Expected CopiaFirmata value to be end with ' + fileNameToUpload
    );
    expect(await permessoTemporaneoUpdatePage.getDocumentoRiconoscimentoInput()).to.endsWith(
      fileNameToUpload,
      'Expected DocumentoRiconoscimento value to be end with ' + fileNameToUpload
    );
    const selectedPagato = permessoTemporaneoUpdatePage.getPagatoInput();
    if (await selectedPagato.isSelected()) {
      await permessoTemporaneoUpdatePage.getPagatoInput().click();
      expect(await permessoTemporaneoUpdatePage.getPagatoInput().isSelected(), 'Expected pagato not to be selected').to.be.false;
    } else {
      await permessoTemporaneoUpdatePage.getPagatoInput().click();
      expect(await permessoTemporaneoUpdatePage.getPagatoInput().isSelected(), 'Expected pagato to be selected').to.be.true;
    }
    expect(await permessoTemporaneoUpdatePage.getProtocolloInput()).to.eq(
      'protocollo',
      'Expected Protocollo value to be equals to protocollo'
    );

    await permessoTemporaneoUpdatePage.save();
    expect(await permessoTemporaneoUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await permessoTemporaneoComponentsPage.countDeleteButtons()).to.eq(
      nbButtonsBeforeCreate + 1,
      'Expected one more entry in the table'
    );
  });

  it('should delete last PermessoTemporaneo', async () => {
    const nbButtonsBeforeDelete = await permessoTemporaneoComponentsPage.countDeleteButtons();
    await permessoTemporaneoComponentsPage.clickOnLastDeleteButton();

    permessoTemporaneoDeleteDialog = new PermessoTemporaneoDeleteDialog();
    expect(await permessoTemporaneoDeleteDialog.getDialogTitle()).to.eq('myztl5App.permessoTemporaneo.delete.question');
    await permessoTemporaneoDeleteDialog.clickOnConfirmButton();

    expect(await permessoTemporaneoComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
