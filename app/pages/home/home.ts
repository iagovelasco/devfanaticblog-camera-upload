import {Component} from '@angular/core';
import {Camera} from 'ionic-native';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  cameraData: string;
  photoTaken: boolean;

  constructor(private navCtrl: NavController) {
    this.photoTaken = false;
  }

  openCamera() {
    var options = {
      sourceType: Camera.PictureSourceType.CAMERA
    };
    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.cameraData = 'data:image/jpeg;base64,' + imageData;
      this.photoTaken = true;
    }, (err) => {
      // Handle error
    });
  }
}
