import { Component, OnInit } from '@angular/core';
import { Geolocation} from '@capacitor/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.scss'],
})
export class StoreLocatorComponent implements OnInit {

  latitude: number;
  longitude: number;
  address : string;

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
};

  constructor(public nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.getLocation();
  }

  store() {
    //alert("Icon clicked");
    console.log('Clicked');
  }

  async getLocation() {
    console.log('Getting location....');
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    this.nativeGeocoder.reverseGeocode(this.latitude, this.longitude, this.options)
  .then((result: NativeGeocoderResult[])  => 
  //this.address = JSON.stringify(result[0]);
  console.log('Address ' + JSON.stringify(result[0])))
  .catch((error: any) => console.log(error));
  }
 
}
