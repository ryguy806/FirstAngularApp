import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {
  @Input() mediaItem;
  onDelete(): void {
    console.log('delete');
  }
}
