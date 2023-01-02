import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import { GiphyViewComponent } from './giphy-view/giphy-view.component';
import { GiphyDetailComponent } from './giphy-detail/giphy-detail.component';
import { MaterialModule } from "src/app/core/models/material/material.module";
import { GifImageRenderComponent } from './_share/gif-image-render/gif-image-render.component';
import { AvatarImageRenderComponent } from './_share/avatar-image-render/avatar-image-render.component';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from "src/app/autoFocus.directive";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GiphyViewComponent,
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
    GiphyViewComponent,
    GiphyDetailComponent,
    GifImageRenderComponent,
    AvatarImageRenderComponent,
    AutoFocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class GiphyModule {
}
