import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PlottingService } from '../plotting.service';

@Component({
  selector: 'app-visual-plot',
  templateUrl: './visual-plot.component.html',
  styleUrls: ['./visual-plot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisualPlotComponent implements OnInit {

  @Input() counter;

  constructor(public plottingService: PlottingService) { }

  ngOnInit() {
  }

}
