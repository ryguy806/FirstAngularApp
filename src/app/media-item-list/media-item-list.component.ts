import { Component, OnInit } from '@angular/core';
import {MediaItemService} from '../services/media-item.service';

@Component({
  selector: 'app-mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{

  mediaItems;
  constructor(private mediaItemService: MediaItemService) {
  }

  onMediaItemDelete(mediaItem): void {
    this.mediaItemService.delete(mediaItem);
  }

  ngOnInit(): void {
    this.mediaItemService.get()
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
