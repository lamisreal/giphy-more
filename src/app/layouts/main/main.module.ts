import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GiphyModule } from './giphys/giphys.module';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./giphys/giphys.module').then(m => m.GiphyModule)
      },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GiphyModule
  ]
})
export class MainModule { }
