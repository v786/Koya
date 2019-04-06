import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { potusScraper } from '../potusScraper';

import { EstateService } from '../estate.service';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent implements OnInit {

  estates: any;
  searchArg: string;

  constructor(private route: ActivatedRoute, private _service: EstateService) {

    this.searchArg = this.route.snapshot.paramMap.get('arg1');

    this.estates = this._service.getAllEstates();

    console.log(this.estates);
  }

  url: 'https://housing.com/rent/flats-for-rent-in-vijayanagar-mysore-P2hnfd8x2cuvh2kt4?f=eyJiYXNlIjpbeyJ0eXBlIjoiUE9MWSIsInV1aWQiOiI4YjFmYjNlNzE5NTU0OTY0YWYyNSIsImxhYmVsIjoiTXlzb3JlIENvbG9ueSJ9XSwibm9uQmFzZUNvdW50IjowLCJleHBlY3RlZFF1ZXJ5IjoibXlzb3JlIiwicXVlcnkiOiIgTXlzb3JlIENvbG9ueSwgQ2hlbWJ1ciIsInYiOjIsInMiOiJkIn0%3D&locality_info=false';


  ngOnInit() {
  }

  getC(val) {

  }

}
