import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio12UserComponent } from './ejercicio-12-user.component';

describe('Ejercicio12UserComponent', () => {
  let component: Ejercicio12UserComponent;
  let fixture: ComponentFixture<Ejercicio12UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio12UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio12UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
