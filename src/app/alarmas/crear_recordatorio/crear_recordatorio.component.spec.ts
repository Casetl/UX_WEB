/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Crear_recordatorioComponent } from './crear_recordatorio.component';

describe('Crear_recordatorioComponent', () => {
  let component: Crear_recordatorioComponent;
  let fixture: ComponentFixture<Crear_recordatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crear_recordatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crear_recordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
