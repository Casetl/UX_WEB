import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas/alarmas.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ClimaComponent } from './clima/clima.component';
import {MatRadioModule} from '@angular/material/radio';
import { MenuComponent } from '../menu/menu.component';
import { Crear_alarmaComponent } from './crear_alarma/crear_alarma.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule


  ],
  declarations: [AlarmasComponent, RecordatorioComponent, CronometroComponent, TemporizadorComponent, ClimaComponent, MenuComponent, Crear_alarmaComponent]
})
export class AlarmasModule { }
