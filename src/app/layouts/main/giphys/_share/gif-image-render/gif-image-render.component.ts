import { Component } from '@angular/core';

@Component({
  selector: 'app-gif-image-render',
  templateUrl: './gif-image-render.component.html',
  styleUrls: ['./gif-image-render.component.css']
})
export class GifImageRenderComponent {
  params: any;
  image: string;
  alt: string;

  agInit(params: any): void {
    this.params = params;
    this.image = params.value;
    this.alt = "Image";
  }

  refresh(params?: any): boolean {
    return true;
  }
}
