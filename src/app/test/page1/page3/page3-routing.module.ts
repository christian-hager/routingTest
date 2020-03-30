import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3Page } from './page3.page';

const routes: Routes = [
  {
    path: '',
    component: Page3Page
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'page5',
    loadChildren: () => import('./page5/page5.module').then( m => m.Page5PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3PageRoutingModule {}
