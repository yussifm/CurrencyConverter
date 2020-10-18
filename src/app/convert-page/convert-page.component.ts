import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})
export class ConvertPageComponent implements OnInit {
  amount = 0;
  from = 'USD';
  to = 'GHS';
  rate = 5.81;

  convert(): number {
    return this.amount * this.rate;
  }

  constructor(private service: ConverterService) {
    this.service.getRates(this.from).subscribe((res) => {
      console.log(res);
    });
   }

  ngOnInit(): void {
  }

}
