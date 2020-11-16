import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myztl5SharedModule } from 'app/shared/shared.module';
import { TestXComponent } from './test-x.component';
import { TestXDetailComponent } from './test-x-detail.component';
import { TestXUpdateComponent } from './test-x-update.component';
import { TestXDeleteDialogComponent } from './test-x-delete-dialog.component';
import { testXRoute } from './test-x.route';

@NgModule({
  imports: [Myztl5SharedModule, RouterModule.forChild(testXRoute)],
  declarations: [TestXComponent, TestXDetailComponent, TestXUpdateComponent, TestXDeleteDialogComponent],
  entryComponents: [TestXDeleteDialogComponent],
})
export class Myztl5TestXModule {}
