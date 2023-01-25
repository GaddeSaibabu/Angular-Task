import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyData } from '../../data/dummydata';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsPageComponent {
  private dummyData = dummyData;
  public albumPhotos = [];
  public id = '';
  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((param) => {
      this.id = param.get('id');

      this.albumPhotos = this.dummyData.filter((x) => x.albumId === this.id);
    });
  }
}
