import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PlottingService } from './plotting.service';
import { VisualPlotComponent } from './visual-plot/visual-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualPlotComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [PlottingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
