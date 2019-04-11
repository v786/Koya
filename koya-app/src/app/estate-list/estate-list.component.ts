import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

import { EstateService } from '../estate.service';
import { ScrapperService } from '../scrapper.service';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css']
})
export class EstateListComponent implements OnInit {

  estates: any;
  searchArg: string;

  cost: any;

  constructor(private route: ActivatedRoute, private _service: EstateService, private _scrapper: ScrapperService) {

    this.searchArg = this.route.snapshot.paramMap.get('arg1');

    this.estates = this._service.getAllEstates();

    console.log(this.estates);

  }

  getScrapper() {
    this._scrapper.getScraps('gokulam').subscribe(
      responsePriceData => {
        this.estates = responsePriceData;
        console.log('success', this.estates);
      },
      responsePriceError => {
        this.estates = null;
        console.log('fail');
      },
      () => console.log('get scraps method executed')
    );
  }

  ngOnInit() {
    this.getScrapper();
  }


}
