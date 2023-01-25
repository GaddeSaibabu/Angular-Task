import { Component, HostListener, OnInit } from '@angular/core';
import { FlickrService } from 'src/app/services';

@Component({
  templateUrl: './expplore.component.html',
  styleUrls: ['./expplore.component.scss'],
})
export class ExplorePageComponent implements OnInit {
  public MAX_PAGES = 10;
  private isLoading = true;
  public photos: Array<any> = [];
  public pageNumber = 1;
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      !this.isLoading &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      if (this.pageNumber !== this.MAX_PAGES) {
        this.pageNumber = this.pageNumber + 1;
        this.getPhotos();
      }
    }
  }
  constructor(private flickrServide: FlickrService) {}
  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos() {
    this.isLoading = true;
    this.flickrServide
      .getRecentPhotos(this.pageNumber)
      .subscribe((response: any) => {
        response.photos.photo.map(x => this.photos.push(x));
      })
      .add(() => (this.isLoading = false));
  }
}
