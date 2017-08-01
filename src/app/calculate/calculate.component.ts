import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnChanges {

  result: any;

  @Input() sum: number;
  @Input() koef: number;

  constructor() {
  }

  ngOnChanges(){
    document.getElementById('res').style.display = 'none';

    this.result = this.koef*this.sum;

    if (this.result>=0) {document.getElementById('res').style.display = 'inline';}
  }

  ngOnInit() {
  }
}
