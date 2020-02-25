import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsigmaComponent } from './ssigma.component';

describe('SsigmaComponent', () => {
  let component: SsigmaComponent;
  let fixture: ComponentFixture<SsigmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsigmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
