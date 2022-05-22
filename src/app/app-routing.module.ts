import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/logged/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/logged/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/logged/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/logged/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/logged/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./pages/logged/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/logged/store/store.module').then( m => m.StorePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
