import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.css']
})
export class PumpComponent {
  @Input() efficiency: number = 0.9; // Default value
  @Input() energy: number = 0; // Default value
  @Output() energyTransferred = new EventEmitter<number>();

  transferEnergy() {
    if (this.isValidNumber(this.energy) && this.isValidNumber(this.efficiency)) {
      const transferredEnergy = this.energy * this.efficiency;
      this.energyTransferred.emit(transferredEnergy);
    }
  }

  isValidNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value) && isFinite(value) && value > 0;
  }
}
