import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExchangeRatesComponent } from './show-exchange-rates.component';

describe('ShowExchangeRatesComponent', () => {
  let component: ShowExchangeRatesComponent;
  let fixture: ComponentFixture<ShowExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExchangeRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
