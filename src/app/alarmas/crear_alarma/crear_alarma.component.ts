import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear_alarma',
  templateUrl: './crear_alarma.component.html',
  styleUrls: ['./crear_alarma.component.css']
})
export class Crear_alarmaComponent implements OnInit {


  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  panelColor = new FormControl('red');
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  eliminar(){
    this.router.navigate(['/alarm']);
  }

}
