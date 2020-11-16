import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myztl5SharedModule } from 'app/shared/shared.module';
import { ZonaComponent } from './zona.component';
import { ZonaDetailComponent } from './zona-detail.component';
import { ZonaUpdateComponent } from './zona-update.component';
import { ZonaDeleteDialogComponent } from './zona-delete-dialog.component';
import { zonaRoute } from './zona.route';

@NgModule({
  imports: [Myztl5SharedModule, RouterModule.forChild(zonaRoute)],
  declarations: [ZonaComponent, ZonaDetailComponent, ZonaUpdateComponent, ZonaDeleteDialogComponent],
  entryComponents: [ZonaDeleteDialogComponent],
})
export class Myztl5ZonaModule {}
