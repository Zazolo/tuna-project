import { Component, OnInit } from '@angular/core';
import { NavController, PickerController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  products: Product[];

  constructor(
    public navController: NavController,
    public pickerController: PickerController
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

  /**
   * Adiciona/Substitui um item ao carrinho atual.
   * @param product 
   */
  addItemOnCart(product: Product): void {

  }

  /**
   * Remove um item do carrinho de compras.
   * @param itemID 
   */
  removeItemFromCart(itemID: string): void {

  }

  async changeItemQuantity(itemId: string){

    // procurar produto com o ID no array de produtos;
    // criar um looping para criar itens de acordo com o minimo e máximo do produto;
    // definir o item index do picker com base na quantidade atual existente no carrinho
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Trocar',
          handler: (selected) => {
            console.log(selected)
            // Alterar o item no array de produtos para a quantidade selecionada;
          },
        }
      ],
      columns: [
        {
          name: 'quantidade',
          options: [
            { text: 'Remover item', value: 0 },
            { text: '1', value: 1, selected: true },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 },
          ],
          selectedIndex: 1 //aqui será trocado
        }
      ]
    });   
    await picker.present();

  }

  /**
   * Faz a solicitação do pedido e direciona para tela inicial após mensagem de confirmação.
   */
  makeOrder(){
    
  }

}
