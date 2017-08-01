import { Component, OnInit } from '@angular/core';
import {GetValueOfCurrencyService} from '../get-value-of-currency.service';

@Component({
  selector: 'app-show-exchange-rates',
  templateUrl: './show-exchange-rates.component.html',
  styleUrls: ['./show-exchange-rates.component.css']
})
export class ShowExchangeRatesComponent implements OnInit {
  ourDate: any = new Date();
  currencyValue: Object[] = [];

  constructor(private getValueOfCurrencyService: GetValueOfCurrencyService ) {
  }

  ngOnInit() {
    this.getValueOfCurrencyService.getValue().subscribe(data => {
      this.currencyValue = data;
      }
    );
  }
}

