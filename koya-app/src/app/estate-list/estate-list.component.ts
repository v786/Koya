import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

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


  ngOnInit() {
  }

}
