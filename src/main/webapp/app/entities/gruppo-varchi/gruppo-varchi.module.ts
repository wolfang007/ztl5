import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myztl5SharedModule } from 'app/shared/shared.module';
import { GruppoVarchiComponent } from './gruppo-varchi.component';
import { GruppoVarchiDetailComponent } from './gruppo-varchi-detail.component';
import { GruppoVarchiUpdateComponent } from './gruppo-varchi-update.component';
import { GruppoVarchiDeleteDialogComponent } from './gruppo-varchi-delete-dialog.component';
import { gruppoVarchiRoute } from './gruppo-varchi.route';

@NgModule({
  imports: [Myztl5SharedModule, RouterModule.forChild(gruppoVarchiRoute)],
  declarations: [GruppoVarchiComponent, GruppoVarchiDetailComponent, GruppoVarchiUpdateComponent, GruppoVarchiDeleteDialogComponent],
  entryComponents: [GruppoVarchiDeleteDialogComponent],
})
export class Myztl5GruppoVarchiModule {}
