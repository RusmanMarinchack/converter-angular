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

  // @Input() dollar: any
  // @Input() euro: any
  @Input() curenc: any

  currencyTwo() {
    this.inputOne.nativeElement.value = (this.inputTwo.nativeElement.value / this.curenc[this.selectOne.nativeElement.value] * this.curenc[this.selectTwo.nativeElement.value]).toFixed(2);

    if(this.inputTwo.nativeElement.value === ''){
      this.inputOne.nativeElement.value = ''
    }
  }

  currencyOne() {
      this.inputTwo.nativeElement.value = (this.inputOne.nativeElement.value / this.curenc[this.selectTwo.nativeElement.value] * this.curenc[this.selectOne.nativeElement.value]).toFixed(2);
      if(this.inputOne.nativeElement.value === ''){
        this.inputTwo.nativeElement.value = ''
      }
  }
  

}
