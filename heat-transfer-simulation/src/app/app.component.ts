import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heat Transfer Simulation';
  energyCollected: number = 0;
  energyTransferred: number = 0;

  onEnergyCollected(energy: number) {
    this.energyCollected = energy;
  }

  onEnergyTransferred(energy: number) {
    this.energyTransferred = energy;
  }
}
