import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-number-data',
  templateUrl: './number-data.component.html',
  styleUrls: ['./number-data.component.scss']
})
export class NumberDataComponent implements OnInit {

  constructor(private numberData: NumberService) { }

  ngOnInit(): void {
    this.getNumberData();
  }

  data:any;

  getNumberData(){
    (this.numberData.getData()).subscribe(
      result => {
        this.data = result;
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
        this.data = error.error.text;
      });
  }

}
