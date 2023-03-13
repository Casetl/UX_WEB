import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.css']
})
export class AlarmasComponent implements OnInit {

  lista={"5:00 pm":"Al despertar, dom, lun, mar, mie, jue", "6:00 pm":"Realizar ejercicio",  "8:00 pm":"Enviar trabajo Universidad" };
  color = "red";
  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
