import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myztl5SharedModule } from 'app/shared/shared.module';
import { ProfiloOrarioComponent } from './profilo-orario.component';
import { ProfiloOrarioDetailComponent } from './profilo-orario-detail.component';
import { ProfiloOrarioUpdateComponent } from './profilo-orario-update.component';
import { ProfiloOrarioDeleteDialogComponent } from './profilo-orario-delete-dialog.component';
import { profiloOrarioRoute } from './profilo-orario.route';

@NgModule({
  imports: [Myztl5SharedModule, RouterModule.forChild(profiloOrarioRoute)],
  declarations: [ProfiloOrarioComponent, ProfiloOrarioDetailComponent, ProfiloOrarioUpdateComponent, ProfiloOrarioDeleteDialogComponent],
  entryComponents: [ProfiloOrarioDeleteDialogComponent],
})
export class Myztl5ProfiloOrarioModule {}
