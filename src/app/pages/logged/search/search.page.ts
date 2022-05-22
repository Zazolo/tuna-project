import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    public navController: NavController
  ) { }

  /**
   * Volta para a página principal.
   * Como a URL de BUSCA pode ser alterada no PATH pelo usuário, é necessário fazer esse input manual
   * para que o usuário sempre tenha como retornar para a tela principal, mesmo tentando "hackear"
   * através do path do navegador.
   */
  goBack() {
    this.navController.navigateBack('home');
  }
  ngOnInit() {
  }
}
