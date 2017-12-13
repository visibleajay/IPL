import { Component } from '@angular/core';
import { PlottingService } from './plotting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public plottingService: PlottingService) {}

}
