import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema1Component } from './tema1.component';

describe('Tema1Component', () => {
  let component: Tema1Component;
  let fixture: ComponentFixture<Tema1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tema1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
