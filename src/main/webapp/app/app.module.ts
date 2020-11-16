import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Myztl5SharedModule } from 'app/shared/shared.module';
import { Myztl5CoreModule } from 'app/core/core.module';
import { Myztl5AppRoutingModule } from './app-routing.module';
import { Myztl5HomeModule } from './home/home.module';
import { Myztl5EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Myztl5SharedModule,
    Myztl5CoreModule,
    Myztl5HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Myztl5EntityModule,
    Myztl5AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Myztl5AppModule {}
