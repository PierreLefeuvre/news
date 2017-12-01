import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//news
import { ViewComponent } from './news/view/view.component';
import { EditComponent } from './news/edit/edit.component';
import { AddComponent } from './news/add/add.component';
import { IndexComponent } from './news/index/index.component';
import { TemplateComponent } from './news/template/template.component';

//bitcoin
import { BitcoinComponent } from './bitcoin/preview/bitcoin.component';

//meteo
import { PreviewComponent } from './meteo/preview/preview.component';
import { ViewComponent as MeteoComponent } from './meteo/view/view.component';
import { MeteoService } from './meteo/meteo.service';

//tuto
import { IndexComponent as IndexTutoComponent } from './tuto/index/index.component';
import { AddComponent as AddTutoComponent } from './tuto/add/add.component';
import { TemplateComponent as TemplateTutoComponent } from './tuto/template/template.component';
import { ViewComponent as ViewTutoComponent } from './tuto/view/view.component';
import { EditComponent as EditTutoComponent } from './tuto/edit/edit.component';
import { LoginComponent } from './login/login/login.component';

import { AuthGuard } from './auth-guard.service';
import { GlobalsService } from './globals.service';

const appRoutes: Routes = [
    { path: '',  component: IndexComponent},

    { path: 'news', component: IndexComponent},   
    { path: 'news/add', component: AddComponent, canActivate: [AuthGuard] },
    { path: 'news/:id/edit',  component: EditComponent, canActivate: [AuthGuard]},
    { path: 'news/:id',  component: ViewComponent},

    { path: 'meteo',  component: MeteoComponent},

    { path: 'tuto', component: IndexTutoComponent},
    { path: 'tuto/add', component: AddTutoComponent, canActivate: [AuthGuard]},
    { path: 'tuto/:id/edit',  component: EditTutoComponent , canActivate: [AuthGuard]},
    { path: 'tuto/:id',  component: ViewTutoComponent},

    { path: 'login',  component: LoginComponent}
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
    MeteoComponent,
    IndexTutoComponent,
    AddTutoComponent,
    TemplateTutoComponent,
    ViewTutoComponent,
    EditTutoComponent,
    LoginComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [AuthGuard, GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
