import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentMicrositeComponent } from './investment-microsite.component';

describe('InvestmentMicrositeComponent', () => {
  let component: InvestmentMicrositeComponent;
  let fixture: ComponentFixture<InvestmentMicrositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentMicrositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentMicrositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
