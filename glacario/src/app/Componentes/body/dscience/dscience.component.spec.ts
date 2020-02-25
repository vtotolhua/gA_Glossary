import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscienceComponent } from './dscience.component';

describe('DscienceComponent', () => {
  let component: DscienceComponent;
  let fixture: ComponentFixture<DscienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
