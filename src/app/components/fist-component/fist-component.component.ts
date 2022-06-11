import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist-component',
  templateUrl: './fist-component.component.html',
  styleUrls: ['./fist-component.component.css']
})
export class FistComponentComponent implements OnInit {
  name: string = 'Gustavo';
  age: number = 20;
  job = 'Programador';
  hobbies = ['Correr', 'Nadar', 'Jogar'];
  car = {
    name: 'Golf',
    year: 2020,
  };


  constructor() { }

  ngOnInit(): void {
  }

}
