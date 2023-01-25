import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DetailsPageComponent,
  HomePageComponent,
  PhotoDetailsPageComponent,
  PhotoUploadPageComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path:'photo-upload',
    component: PhotoUploadPageComponent
  },
  {
    path: ':id',
    component: DetailsPageComponent,
  },
  {
    path: ':id/photos/:photoId',
    component: PhotoDetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
