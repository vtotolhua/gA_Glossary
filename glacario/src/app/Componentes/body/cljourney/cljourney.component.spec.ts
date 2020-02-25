import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CljourneyComponent } from './cljourney.component';

describe('CljourneyComponent', () => {
  let component: CljourneyComponent;
  let fixture: ComponentFixture<CljourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CljourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CljourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
