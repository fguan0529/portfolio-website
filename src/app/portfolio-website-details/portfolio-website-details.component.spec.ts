import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWebsiteDetailsComponent } from './portfolio-website-details.component';

describe('PortfolioWebsiteDetailsComponent', () => {
  let component: PortfolioWebsiteDetailsComponent;
  let fixture: ComponentFixture<PortfolioWebsiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioWebsiteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWebsiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
