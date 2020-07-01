import { Component } from '@angular/core';

@Component({
  selector: 'app-mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {
  onSubmit(mediaItem): void {
    console.log(mediaItem);
  }
}
