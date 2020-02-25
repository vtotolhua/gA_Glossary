import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnfundComponent } from './cmnfund.component';

describe('CmnfundComponent', () => {
  let component: CmnfundComponent;
  let fixture: ComponentFixture<CmnfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmnfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
