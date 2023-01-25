import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const key = environment.flickrApiKey;
const baseApiUrl = environment.flickrApi;

@Injectable()
export class FlickrService {
  constructor(private httpClient: HttpClient) {}
  public getRecentPhotos(page: number) {
    const url = this.getFullUrl('flickr.photos.getRecent', page);
    return this.httpClient.get(url);
  }

  private getFullUrl(method: string, page: number = -1) {
    return `${baseApiUrl}?method=${method}&api_key=${key}${
      page !== -1 ? '&page=' + page : ''
    }&format=json&nojsoncallback=1`;
  }
}
