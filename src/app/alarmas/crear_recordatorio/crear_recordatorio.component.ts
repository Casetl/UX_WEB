import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {  NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-crear_recordatorio',
  templateUrl: './crear_recordatorio.component.html',
  styleUrls: ['./crear_recordatorio.component.css']
})
export class Crear_recordatorioComponent implements OnInit {

  model!: NgbDateStruct;
  time = { hour: 13, minute: 30 };

  constructor(private router: Router,) { }

  ngOnInit() {
  }


 eliminar(){
    this.router.navigate(['/reminder']);
  }
}
