import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear_alarma',
  templateUrl: './crear_alarma.component.html',
  styleUrls: ['./crear_alarma.component.css']
})
export class Crear_alarmaComponent implements OnInit {


  constructor(private router: Router,) { }

  ngOnInit() {
  }

  eliminar(){
    this.router.navigate(['/alarm']);
  }

}
