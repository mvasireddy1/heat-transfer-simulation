import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-solar-panel',
  templateUrl: './solar-panel.component.html',
  styleUrls: ['./solar-panel.component.css']
})
export class SolarPanelComponent {
  efficiency: number = 0.15; // Default value
  area: number = 10; // Default value
  solarRadiation: number = 800; // Default value

  @Output() energyCollected = new EventEmitter<number>();

  collectEnergy() {
    if (this.isValidNumber(this.efficiency) && this.isValidNumber(this.area) && this.isValidNumber(this.solarRadiation)) {
      const energy = this.solarRadiation * this.efficiency * this.area;
      this.energyCollected.emit(energy);
    }
  }

  isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value) && isFinite(value) && value > 0;
  }
}
