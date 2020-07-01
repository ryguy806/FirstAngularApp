import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  private static handleError(error: HttpErrorResponse): any {
    console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }

  get(medium): any {
    const getOptions = {
      params: {medium},
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(MediaItemService.handleError)
      );
  }

  add(mediaItem): any {
    return this.http.post('mediaitems', mediaItem)
      .pipe(catchError(MediaItemService.handleError));
  }

  delete(mediaItem): any {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(MediaItemService.handleError));
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}


