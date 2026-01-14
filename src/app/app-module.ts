import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Header } from './components/header/header';
import { RegisterProduct } from './components/register-product/register-product';
import { TableProducts } from './components/table-products/table-products';
import { Footer } from './components/footer/footer';
import { registerLocaleData } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { TableCategories } from './components/table-categories/table-categories';
import { RegisterCategory } from './components/register-category/register-category';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    App,
    RegisterProduct,
    TableProducts,
    Header,
    Footer,
    Navbar,
    Home,
    TableCategories,
    RegisterCategory
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [App]
})
export class AppModule { }
