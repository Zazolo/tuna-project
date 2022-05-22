import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    public navController: NavController
  ) { }

  ngOnInit() {
  }

  /**
   * Volta para a página principal.
   * Como a URL de CHAT pode ser alterada no PATH pelo usuário, é necessário fazer esse input manual
   * para que o usuário sempre tenha como retornar para a tela principal, mesmo tentando "hackear"
   * através do path do navegador.
   */
  goBack() {
    this.navController.navigateBack('home');
  }

}
