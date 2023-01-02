import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layouts/components/page-not-found/page-not-found.component';
import { MainModule } from './layouts/main/main.module';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { MaterialModule } from './core/models/material/material.module';
import { SpinnerComponent } from './layouts/components/spinner/spinner.component';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule)
  },
  { path: '**', component: PageNotFoundComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
