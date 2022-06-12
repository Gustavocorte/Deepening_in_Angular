import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
 
  animals: Animal[] = [];

  animalDetails = ''

  //Primeira letra maiuscula - tipo do dade - importação do serviço - classe
  //Primeira letra minuscula - chamando o componente

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pat ${animal.name} tem ${animal.age}`
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
