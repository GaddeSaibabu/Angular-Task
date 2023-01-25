import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyData } from '../../data/dummydata';

@Component({
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadPageComponent {
  private selectedImagesList: File[] = [];
  public selectedImagesPreview: Array<any> = [];
  public showMessage = false;
  public onSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length <= 0) {
      return;
    }

    for (let index = 0; index < input.files.length; index++) {
      const reader = new FileReader();
      reader.onload = (onLoadEvent: any) => {
        this.selectedImagesPreview.push(onLoadEvent.target.result);
      };
      reader.readAsDataURL(input.files[index]);
      this.selectedImagesList.push(input.files[index]);
    }
  }

  public onRemoveSelectedThumb(index: number) {
    this.selectedImagesPreview.splice(index, 1);
    this.selectedImagesList.splice(index, 1);
  }

  public onUploadClick(){
    this.selectedImagesPreview = [];
    this.selectedImagesList = [];
    this.showMessage = true;
  }
}
