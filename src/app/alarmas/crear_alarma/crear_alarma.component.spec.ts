/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Crear_alarmaComponent } from './crear_alarma.component';

describe('Crear_alarmaComponent', () => {
  let component: Crear_alarmaComponent;
  let fixture: ComponentFixture<Crear_alarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crear_alarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crear_alarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
