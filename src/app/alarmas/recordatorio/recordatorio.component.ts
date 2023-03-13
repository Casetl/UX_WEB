import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.component.html',
  styleUrls: ['./recordatorio.component.css']
})
export class RecordatorioComponent implements OnInit {

  lista={"5:00 pm":"Al despertar, dom, lun, mar, mie, jue", "6:00 pm":"Realizar ejercicio",  "8:00 pm":"Enviar trabajo Universidad",  "9:00 pm":"Pausa Activa"};

  constructor() { }

  ngOnInit() {
  }

}
