import {Component} from '@angular/core';
import {Camera} from 'ionic-native';
import {NavController} from 'ionic-angular';
import {DomSanitizationService} from '@angular/platform-browser';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  cameraData: string;
  photoTaken: boolean;
  cameraUrl: string;
  photoSelected: boolean;

  constructor(private navCtrl: NavController, private _DomSanitizationService: DomSanitizationService) {
    this.photoTaken = false;
  }

  selectFromGallery() {
    var options = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraUrl = imageData;
      this.photoSelected = true;
      this.photoTaken = false;
    }, (err) => {
      // Handle error
    });
  }

  openCamera() {
    var options = {
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.DATA_URL
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraData = 'data:image/jpeg;base64,' + imageData;
      this.photoTaken = true;
      this.photoSelected = false;
    }, (err) => {
      // Handle error
    });
  }
}
