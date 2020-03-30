import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Page } from './page1.page';

const routes: Routes = [
  {
    path: '',
    component: Page1Page
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1PageRoutingModule {}
