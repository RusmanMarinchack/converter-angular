import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {


  constructor() { }

  @ViewChild('inputOne') inputOne: any
  @ViewChild('selectOne') selectOne: any
  @ViewChild('inputTwo') inputTwo: any
  @ViewChild('selectTwo') selectTwo: any

  ngOnInit():void{
    
  }

  @Input() dollar: any
  @Input() euro: any

  currencyTwo() {

    if(this.selectTwo.nativeElement.value === 'UAH'){
      if(this.selectOne.nativeElement.value === 'USD'){
         this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value / this.dollar.rate).toFixed(2);
      } 
      else if(this.selectOne.nativeElement.value === 'EUR'){
         this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value / this.euro.rate).toFixed(2);
      } 
      else {
         this.inputOne.nativeElement.value = this.inputTwo.nativeElement.value; 
      }
    }

    else if(this.selectTwo.nativeElement.value === 'USD'){
      if(this.selectOne.nativeElement.value === 'EUR'){
        this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value * 0.99).toFixed(2);
      }
      else if(this.selectOne.nativeElement.value === 'UAH'){
        this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value / this.dollar.rate).toFixed(2);
      } 
      else {
         this.inputOne.nativeElement.value = this.inputTwo.nativeElement.value;
      }
    }

    else if(this.selectTwo.nativeElement.value === 'EUR'){
      if(this.selectOne.nativeElement.value === 'USD'){
        this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value * 1.06).toFixed(2);
      }
      else if(this.selectOne.nativeElement.value === 'UAH'){
        this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value / this.euro.rate).toFixed(2);
      } 
      else {
        this.inputOne.nativeElement.value = this.inputTwo.nativeElement.value;
      }
    }
  
    if(this.inputTwo.nativeElement.value === ''){
      this.inputOne.nativeElement.value = ''
    }

  }

  currencyOne() {
    
    if(this.selectOne.nativeElement.value === 'UAH'){
      if(this.selectTwo.nativeElement.value === 'USD'){
        this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value / this.dollar.rate).toFixed(2);
      } 
      else if(this.selectTwo.nativeElement.value === 'EUR'){
         this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value * this.euro.rate).toFixed(2);
      } 
      else {
         this.inputTwo.nativeElement.value = this.inputOne.nativeElement.value;
      }
    } 

    else if(this.selectOne.nativeElement.value === 'USD'){
      if(this.selectTwo.nativeElement.value === 'EUR'){
        this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value * 0.99).toFixed(2);
      }
      else if(this.selectTwo.nativeElement.value === 'UAH'){
        this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value * this.dollar.rate).toFixed(2);
      } 
      else {
         this.inputTwo.nativeElement.value = this.inputOne.nativeElement.value;
      }
    }

    else if(this.selectOne.nativeElement.value === 'EUR'){
      if(this.selectTwo.nativeElement.value === 'USD'){
        this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value * 1.06).toFixed(2);
      }
      else if(this.selectTwo.nativeElement.value === 'UAH'){
        this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value * this.euro.rate).toFixed(2);
      } 
      else {
        this.inputTwo.nativeElement.value = this.inputOne.nativeElement.value;
      }
    }

    if(this.inputOne.nativeElement.value === ''){
      this.inputTwo.nativeElement.value = ''
    }
  }
  

}
