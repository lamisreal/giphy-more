import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-image-render',
  templateUrl: './avatar-image-render.component.html',
  styleUrls: ['./avatar-image-render.component.css']
})
export class AvatarImageRenderComponent {
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
