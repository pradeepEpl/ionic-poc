import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-botton-navigation',
  templateUrl: './botton-navigation.component.html',
  styleUrls: ['./botton-navigation.component.scss'],
})
export class BottonNavigationComponent implements OnInit {

  guestPicture;
  
  constructor() { }

  ngOnInit() {}

  openCamera() {
    console.log('open camera')
    this.takePicture();
  }

  async takePicture() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture = profilePicture.base64String;
    } catch (error) {
      console.error(error);
    }
  }

}
