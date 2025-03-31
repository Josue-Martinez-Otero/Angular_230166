import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio12HomeComponent } from './ejercicio-12-home.component';

describe('Ejercicio12HomeComponent', () => {
  let component: Ejercicio12HomeComponent;
  let fixture: ComponentFixture<Ejercicio12HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio12HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio12HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
