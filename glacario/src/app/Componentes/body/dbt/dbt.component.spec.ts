import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtComponent } from './dbt.component';

describe('DbtComponent', () => {
  let component: DbtComponent;
  let fixture: ComponentFixture<DbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
