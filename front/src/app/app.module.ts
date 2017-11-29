import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewComponent } from './news/view/view.component';
import { EditComponent } from './news/edit/edit.component';
import { AddComponent } from './news/add/add.component';
import { IndexComponent } from './news/index/index.component';
import { TemplateComponent } from './news/template/template.component';
import { BitcoinComponent } from './bitcoin/preview/bitcoin.component';
import { PreviewComponent } from './meteo/preview/preview.component';
import { ViewComponent as MeteoComponent } from './meteo/view/view.component';

const appRoutes: Routes = [
    { path: 'news', component: IndexComponent},
    { path: '',  component: IndexComponent},
    { path: 'news/add', component: AddComponent},
    { path: 'news/:id/edit',  component: EditComponent},
    { path: 'news/:id',  component: ViewComponent},
    { path: 'meteo',  component: MeteoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    AddComponent,
    IndexComponent,
    TemplateComponent,
    BitcoinComponent,
    PreviewComponent,
    MeteoComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
