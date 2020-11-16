import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myztl5SharedModule } from 'app/shared/shared.module';
import { VarcoComponent } from './varco.component';
import { VarcoDetailComponent } from './varco-detail.component';
import { VarcoUpdateComponent } from './varco-update.component';
import { VarcoDeleteDialogComponent } from './varco-delete-dialog.component';
import { varcoRoute } from './varco.route';

@NgModule({
  imports: [Myztl5SharedModule, RouterModule.forChild(varcoRoute)],
  declarations: [VarcoComponent, VarcoDetailComponent, VarcoUpdateComponent, VarcoDeleteDialogComponent],
  entryComponents: [VarcoDeleteDialogComponent],
})
export class Myztl5VarcoModule {}
