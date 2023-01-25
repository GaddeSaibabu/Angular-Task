import { Component } from '@angular/core';

export const dummyData = [
  {
    id: '1',
    image: 'https://farm66.staticflickr.com/65535/52647750477_583afd8750.jpg',
    title: 'Album 1',
  },
  {
    id: '2',
    image: 'https://farm66.staticflickr.com/65535/52646924812_ab2839180d.jpg',
    title: 'Album 2',
  },
  {
    id: '3',
    image: 'https://farm66.staticflickr.com/65535/52646925222_68b313623c.jpg',
    title: 'Album 3',
  },
  {
    id: '4',
    image: 'https://farm66.staticflickr.com/65535/52646925402_605747a999.jpg',
    title: 'Album 4',
  },
];

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
    public albumbs = dummyData;
}
