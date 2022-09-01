import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { currency } from 'src/data/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currency: any;
  currencyObj: any = new Object();
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .subscribe(response => {
      // console.log(response)
      this.currency = response;
      this.currency.forEach((data:any, index:any) => {
        this.currencyObj[data.cc] = data.rate
        
        
      })
      this.currencyObj.UAH = 1

    })

    
  }

}