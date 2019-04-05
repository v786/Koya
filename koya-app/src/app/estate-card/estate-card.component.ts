import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.css']
})
export class EstateCardComponent implements OnInit {

  private _estate: any;

  @Input()
  set estate(estate: any) {
    this._estate = estate;
  }

  get estate() { return this._estate; }

  constructor() {
  }

  ngOnInit() {
  }

}
