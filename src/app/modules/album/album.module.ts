import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumRoutingModule } from './album-routing.module';
import { PAGES } from './pages';

@NgModule({
  declarations: [PAGES],
  imports: [CommonModule, AlbumRoutingModule],
})
export class AlbumModule {}
