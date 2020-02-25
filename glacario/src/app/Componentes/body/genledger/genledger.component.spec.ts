import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenledgerComponent } from './genledger.component';

describe('GenledgerComponent', () => {
  let component: GenledgerComponent;
  let fixture: ComponentFixture<GenledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
