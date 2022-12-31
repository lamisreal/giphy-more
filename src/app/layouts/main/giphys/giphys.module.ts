import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import { MaterialModule } from "src/app/material/material.module";
import { GiphyDetailComponent } from './giphy-detail/giphy-detail.component';
import { GiphysComponent } from "./giphys.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GiphysComponent,
      },
      {
        path: 'detail',
        component: GiphyDetailComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    GiphysComponent,
    GiphyDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AgGridModule,
    ReactiveFormsModule,
  ]
})

export class GiphyModule {
}
