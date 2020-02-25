import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaofferComponent } from './gaoffer.component';

describe('GaofferComponent', () => {
  let component: GaofferComponent;
  let fixture: ComponentFixture<GaofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
