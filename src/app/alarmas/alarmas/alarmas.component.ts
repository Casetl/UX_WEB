import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.css']
})
export class AlarmasComponent implements OnInit {

  lista:string[]=["hola","que", "tal"];
  color = "red";
  checked = false;

  constructor() { }

  ngOnInit() {
  }

}
