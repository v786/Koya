import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  constructor(private _httpCli: HttpClient) { }

}
