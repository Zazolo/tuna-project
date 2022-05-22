import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface catInfoType {
  label: string;
  imageName: string;
}

@Component({
  selector: 'app-food-type-carrousel',
  templateUrl: './food-type-carrousel.component.html',
  styleUrls: ['./food-type-carrousel.component.scss'],
})
export class FoodTypeCarrouselComponent implements OnInit {

  catNames: BehaviorSubject<catInfoType[]> = new BehaviorSubject<catInfoType[]>([]);

  constructor() { }

  ngOnInit() {
    this.catNames.next(
      [
        {label: 'Lanches', imageName: 'cat_lanches.jpg'},
        {label: 'Pizza', imageName: 'cat_pizza.png'},
        {label: 'Japonesa', imageName: 'cat_japonesa.jpg'},
        {label: 'Açaí', imageName: 'cat_acai.png'},
        {label: 'Saudáveis', imageName: 'cat_saudaveis.png'},
        {label: 'Padaria', imageName: 'cat_padaria.png'},
        {label: 'Café', imageName: 'cat_cafe.png'},
        {label: 'Brasileira', imageName: 'cat_brasileira.png'},
        {label: 'Árabe', imageName: 'cat_arabe.png'},
        {label: 'Italiana', imageName: 'cat_italiana.png'},
        {label: 'Salgados', imageName: 'cat_salgados.png'},
        {label: 'Doces e Bolos', imageName: 'cat_doces_e_bolos.png'},
      ]
    );
  }

}
