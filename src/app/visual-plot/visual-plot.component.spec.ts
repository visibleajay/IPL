import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPlotComponent } from './visual-plot.component';

describe('VisualPlotComponent', () => {
  let component: VisualPlotComponent;
  let fixture: ComponentFixture<VisualPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
