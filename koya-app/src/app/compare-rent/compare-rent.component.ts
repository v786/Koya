import { Component, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ChartsModule, Label } from 'ng2-charts';
import { ScrapperService } from '../scrapper.service';

@Component({
  selector: 'app-compare-rent',
  templateUrl: './compare-rent.component.html',
  styleUrls: ['./compare-rent.component.css']
})
export class CompareRentComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  data = [
    {
      "_id": "5ca7e5c5fdbfa311d857c11c",
      "Locality": "Bannimantap",
      "Min": "4211",
      "max": "5614",
      "AvgPrice": "4912"
    },
    { "_id": "5ca7e639f271a611d88312ae", "Locality": "Bogadi", "Min": "2042", "max": "3500", "AvgPrice": "2771" },
    { "_id": "5ca7e664f271a611d88312af", "Locality": "Gokulam", "Min": "5093", "max": "5648", "AvgPrice": "5370" }];

  public barChartLabels: Label[] = ['Min', 'Max', 'AvgPrice'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public estates: any[];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private _scrapper: ScrapperService) {
    const temp = [];
    this.data.forEach(function (elem) {
      temp.push({
        data: [
          parseInt(elem['Min'], 10),
          parseInt(elem['max'], 10),
          parseInt(elem['AvgPrice'], 10)
        ],
        label: elem['Locality']
      });
      console.log(temp);
    });
    this.barChartData = temp;
  }

  getScrapper() {
    this._scrapper.getScraps('gokulam').subscribe(
      responsePriceData => {
        this.estates = responsePriceData;
        console.log('success', this.estates);
      },
      responsePriceError => {
        this.estates = null;
        console.log('fail')
      },
      () => console.log('get scraps method executed')
    );
  }

  ngOnInit() {
    this.getScrapper();
  }

}
