import { Component, OnInit } from '@angular/core';
import {GetValueOfCurrencyService} from '../get-value-of-currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  firstCurrency: string;
  secondCurrency: string;
  sumOfuser: any;

  firstKoef: number;
  secondKoef: number;
  mainKoef: number;

  currencyValue: any[] = [];

  constructor(private getValueOfCurrencyService: GetValueOfCurrencyService ) {}

  calculate(){

    if (this.firstCurrency == 'UAH'){
      this.firstKoef = 1;
    } else {
      this.currencyValue.forEach((object) => {
        if (object.ccy == this.firstCurrency){
          this.firstKoef = object.buy;
          }
        }
      );
    }

    if (this.secondCurrency == 'UAH'){
      this.secondKoef = 1;
    } else {
      this.currencyValue.forEach((object) => {
          if (object.ccy == this.secondCurrency){
            this.secondKoef = object.buy;
          }
        }
      );
    }

    this.mainKoef = this.firstKoef/this.secondKoef ;

    if (this.sumOfuser == undefined) {
      alert("please, input yours sum");
    }
  }

    ngOnInit() {
      this.getValueOfCurrencyService.getValue().subscribe(data => {
        this.currencyValue = data;
      }
    )
  }
}
