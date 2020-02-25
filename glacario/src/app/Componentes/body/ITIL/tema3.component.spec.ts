import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema3Component } from './tema3.component';

describe('Tema3Component', () => {
  let component: Tema3Component;
  let fixture: ComponentFixture<Tema3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tema3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
