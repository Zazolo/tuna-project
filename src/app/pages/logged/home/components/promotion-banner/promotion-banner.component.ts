import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPromotion } from './interfaces/ipromotion';


@Component({
  selector: 'app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss'],
})
export class PromotionBannerComponent implements OnInit {

  promotions: BehaviorSubject<IPromotion[]> = new BehaviorSubject<IPromotion[]>([]);

  constructor() { }

  ngOnInit() {
    this.promotions.next(
      [
        {
          author: {login: "deusopa", name: "Deu Sopa", picture: "https://st2.depositphotos.com/1035649/7783/v/600/depositphotos_77833060-stock-illustration-restaurant-logo.jpg"},
          expiration_date: new Date(),
          start_date: new Date(),
          image: "https://img.cybercook.com.br/imagens/receitas/947/pizza-caseira-1.jpg",
          promoID: 'id_da_promo_registrada_para_abrir_na_pagina_de_promoções',
          text_data: "2 Pizza família pelo preço de uma!"
        },
        {
          author: {login: "romanorestaurante", name: "Restaurante do romano", picture: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2018%2F05%2F07%2F15%2FLogo-241116_47020_154654517_861689219.jpg"},
          expiration_date: new Date(),
          start_date: new Date(),
          image: "https://www.receitasdeliciosasnamesa.com/wp-content/uploads/2020/10/Massa-macarrao-caseiro-simples.jpg",
          promoID: 'id_da_promo_registrada_para_abrir_na_pagina_de_promoções',
          text_data: "Massas com 50% de desconto!"
        }
      ]
    )
  }

}
