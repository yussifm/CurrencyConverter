import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
