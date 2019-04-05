import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent implements OnInit {

  estate: any;

  constructor() {
    this.estate = {
      "bedroom": "3",
      "bathroom": "1",
      "area": "1800",
      "cost": "10000",
      "advance": "25000",
      "rating": "3.9",
      "amenities": "fan, lights, stove, balcony",
      "isBooked": "0",
      "_id": "5ca75f9f2acbb41180c16a8a"
    };
  }

  ngOnInit() {
  }

}
