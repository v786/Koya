import { Injectable } from '@angular/core';
import { cheerio } from '../../node_modules/cheerio';
import { rp } from '../../node_modules/request-promise';

@Injectable({
  providedIn: 'root'
})
export class ScrapService {

  constructor() { }

  potusScraper(url) {
    return rp(url)
      .then(function (html) {
        //success!
        console.log($('.rli-price', html).text());
      })
      .catch(function (err) {
        //handle error
      });
  }
}
