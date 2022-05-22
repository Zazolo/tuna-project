import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationPage } from './configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPage,
    children: [
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationPageRoutingModule {}
