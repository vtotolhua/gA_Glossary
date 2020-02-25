import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleUniComponent } from './oracle-uni.component';

describe('OracleUniComponent', () => {
  let component: OracleUniComponent;
  let fixture: ComponentFixture<OracleUniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleUniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
