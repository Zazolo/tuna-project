import { Component, OnInit } from '@angular/core';
import { ActionSheetController, IonNav, NavController } from '@ionic/angular';
import { ChatPage } from '../chat/chat.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController,
    public navController: NavController,

  ) { }

  ngOnInit() {
  }

  /**
   * Navega para a tela do carrinho de compras
   */
  goCart() {
    this.navController.navigateForward('cart');
  }

  /**
   * Navega para a tela de notificcações
   */
  goNotification() {
    this.navController.navigateForward('notification');
  }

  /**
   * Navega para a tela de busca
   */
  goSearch() {
    this.navController.navigateForward('search');
  }
  async toolbarMenuOptionsShow() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Histórico de Pedidos',
          role: 'pedidos',
          icon: 'document-outline',
          id: 'pedidos-button',
          data: {
            type: 'PEDIDOS'
          },
          handler: () => {
            console.log('PEDIDOS clicked');
          }
        }, 
        {
          text: 'Escanear QR-Code',
          role: 'scan-qr-code',
          icon: 'qr-code-outline',
          id: 'qr-code-button',
          data: {
            type: 'QR-CODE'
          },
          handler: () => {
            console.log('QR-CODE clicked');
          }
        },
        {
          text: 'Conversas',
          role: 'chat',
          icon: 'paper-plane-outline',
          id: 'chat-button',
          data: {
            type: 'CHAT'
          },
          handler: () => {
            this.navController.navigateForward('chat');
          }
        },
        {
          text: 'Configurações',
          role: 'configuracoes',
          icon: 'settings-outline',
          id: 'configuracoes-button',
          data: {
            type: 'CONFIGURACOES'
          },
          handler: () => {
            console.log('QR-CODE clicked');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }


}
