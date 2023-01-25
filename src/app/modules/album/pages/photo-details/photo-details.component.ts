import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyData } from '../../data/dummydata';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsPageComponent {
  private dummyData = dummyData;
  public albumPhoto = null;
  public id = '';
  constructor(route: ActivatedRoute) {
    route.paramMap.subscribe((param) => {
      this.id = param.get('photoId');

      this.albumPhoto = this.dummyData.find((x) => x.id === this.id);
    });
  }
}
