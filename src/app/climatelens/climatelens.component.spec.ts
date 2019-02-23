import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatelensComponent } from './climatelens.component';

describe('ClimatelensComponent', () => {
  let component: ClimatelensComponent;
  let fixture: ComponentFixture<ClimatelensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimatelensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimatelensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
