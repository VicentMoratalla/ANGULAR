import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  archives: any[] = [
    {year: 2017, month: 1},
    {year: 2017, month: 2},
    {year: 2017, month: 3}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
