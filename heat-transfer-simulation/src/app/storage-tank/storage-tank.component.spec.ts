import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTankComponent } from './storage-tank.component';

describe('StorageTankComponent', () => {
  let component: StorageTankComponent;
  let fixture: ComponentFixture<StorageTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageTankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
