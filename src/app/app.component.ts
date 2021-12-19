import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matellio';
  photos: Array<any> = [];
  selectedPhotos: Array<any> = [];
  constructor(private appService: HttpService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.appService.get('photos').subscribe((response: any) => {
      this.photos = response.slice(0, 3);
    }, (err: HttpErrorResponse) => {

    });
  }

  trimName(name: string) {
    return name.slice(0, 25);
  }

  updateTable(photo: any) {
    const element = document.getElementById("btn-" + photo.id);
    if (element !== null) {
      if (element.innerHTML == 'Compare') {
        this.selectedPhotos.unshift(photo);
        element.innerHTML = 'Remove';
        this.selectedPhotos = [...this.selectedPhotos];
      } else {
        const index = this.selectedPhotos.findIndex(x => x.id === photo.id);
        if (index > -1) {
          this.selectedPhotos.splice(index, 1);
          this.selectedPhotos = [...this.selectedPhotos];
        }
        element.innerHTML = 'Compare';
      }
    }
  }
}
