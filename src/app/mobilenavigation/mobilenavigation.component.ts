import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilenavigation',
  templateUrl: './mobilenavigation.component.html',
  styleUrls: ['./mobilenavigation.component.scss'],
})
export class MobilenavigationComponent implements OnInit {

  navigate : any = [
    {
      title : "Saving",
      url   : "/saving",
      icon : "cash-outline"
    },
    {
      title : "Shopper Id",
      url   : "/shopperid",
      icon  : "eye-outline"
    }
  ]

  constructor() { }

  ngOnInit() {}

    

}
