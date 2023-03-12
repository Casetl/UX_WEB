import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ClimaComponent } from './clima/clima.component';
import { MenuComponent } from '../menu/menu.component';
import { Crear_alarmaComponent } from './crear_alarma/crear_alarma.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { Crear_recordatorioComponent } from './crear_recordatorio/crear_recordatorio.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgbTimepickerModule,
    FormsModule,
    JsonPipe,
    NgbAlertModule,
    NgbDatepickerModule,

  ],
  declarations: [
    AlarmasComponent,
    RecordatorioComponent,
    CronometroComponent,
    TemporizadorComponent,
    ClimaComponent,
    MenuComponent,
    Crear_alarmaComponent,
    Crear_recordatorioComponent,
  ],
})
export class AlarmasModule {}
