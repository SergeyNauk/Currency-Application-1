import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ShowExchangeRatesComponent } from './show-exchange-rates/show-exchange-rates.component';
import {GetValueOfCurrencyService} from './get-value-of-currency.service';

import {Routes, RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { CalculateComponent } from './calculate/calculate.component';



const appRoutes: Routes =[
  { path: 'currency-converter', component: CurrencyConverterComponent},
  { path: 'show-exchange-rates', component: ShowExchangeRatesComponent},
  { path: '**', redirectTo: '/'}

];


@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    ShowExchangeRatesComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CdkTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [GetValueOfCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
