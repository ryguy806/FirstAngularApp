import {Component} from '@angular/core';

@Component({
  selector: 'app-mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {
  name = 'Pokemon: The First Movie';
  wasWatched(): boolean {
    return true;
  }
}
