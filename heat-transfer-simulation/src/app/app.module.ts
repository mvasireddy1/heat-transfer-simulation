import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SolarPanelComponent } from './solar-panel/solar-panel.component';
import { PumpComponent } from './pump/pump.component';
import { StorageTankComponent } from './storage-tank/storage-tank.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarPanelComponent,
    PumpComponent,
    StorageTankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
