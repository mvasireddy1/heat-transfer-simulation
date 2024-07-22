import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-storage-tank',
  templateUrl: './storage-tank.component.html',
  styleUrls: ['./storage-tank.component.css']
})
export class StorageTankComponent {
  @Input() energy: number = 0;
  @Input() capacity: number = 100;
  @Input() initialTemperature: number = 25;

  get finalTemperature(): number {
    if (this.isValidNumber(this.energy) && this.isValidNumber(this.capacity) && this.isValidNumber(this.initialTemperature)) {
      const specificHeatCapacity = 4.186; // J/g°C
      const massOfWater = this.capacity * 1000; // Convert liters to grams
      const temperatureIncrease = this.energy / (massOfWater * specificHeatCapacity);
      return this.initialTemperature + temperatureIncrease;
    }
    return NaN;
  }

  isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value) && isFinite(value) && value > 0;
  }

  isFinite(value: number): boolean {
    return !isNaN(value) && isFinite(value);
  }
}
