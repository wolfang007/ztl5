import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'tipologia-zona',
        loadChildren: () => import('./tipologia-zona/tipologia-zona.module').then(m => m.Myztl5TipologiaZonaModule),
      },
      {
        path: 'varco',
        loadChildren: () => import('./varco/varco.module').then(m => m.Myztl5VarcoModule),
      },
      {
        path: 'gruppo-varchi',
        loadChildren: () => import('./gruppo-varchi/gruppo-varchi.module').then(m => m.Myztl5GruppoVarchiModule),
      },
      {
        path: 'tipologia-veicolo',
        loadChildren: () => import('./tipologia-veicolo/tipologia-veicolo.module').then(m => m.Myztl5TipologiaVeicoloModule),
      },
      {
        path: 'festivita',
        loadChildren: () => import('./festivita/festivita.module').then(m => m.Myztl5FestivitaModule),
      },
      {
        path: 'regola-oraria',
        loadChildren: () => import('./regola-oraria/regola-oraria.module').then(m => m.Myztl5RegolaOrariaModule),
      },
      {
        path: 'profilo-orario',
        loadChildren: () => import('./profilo-orario/profilo-orario.module').then(m => m.Myztl5ProfiloOrarioModule),
      },
      {
        path: 'autorizzazione',
        loadChildren: () => import('./autorizzazione/autorizzazione.module').then(m => m.Myztl5AutorizzazioneModule),
      },
      {
        path: 'zona',
        loadChildren: () => import('./zona/zona.module').then(m => m.Myztl5ZonaModule),
      },
      {
        path: 'tipologia-permesso',
        loadChildren: () => import('./tipologia-permesso/tipologia-permesso.module').then(m => m.Myztl5TipologiaPermessoModule),
      },
      {
        path: 'durata-costo',
        loadChildren: () => import('./durata-costo/durata-costo.module').then(m => m.Myztl5DurataCostoModule),
      },
      {
        path: 'motivazione',
        loadChildren: () => import('./motivazione/motivazione.module').then(m => m.Myztl5MotivazioneModule),
      },
      {
        path: 'calendarizzazione',
        loadChildren: () => import('./calendarizzazione/calendarizzazione.module').then(m => m.Myztl5CalendarizzazioneModule),
      },
      {
        path: 'test-x',
        loadChildren: () => import('./test-x/test-x.module').then(m => m.Myztl5TestXModule),
      },
      {
        path: 'permesso-temporaneo',
        loadChildren: () => import('./permesso-temporaneo/permesso-temporaneo.module').then(m => m.Myztl5PermessoTemporaneoModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Myztl5EntityModule {}
