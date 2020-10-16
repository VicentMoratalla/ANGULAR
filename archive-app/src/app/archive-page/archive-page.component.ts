import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})
export class ArchivePageComponent implements OnInit {
  
  year: number;
  month: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.year = +this.route.snapshot.paramMap.get('year');
    this.month = + this.route.snapshot.paramMap.get('month');

  }

  viewAll(){
    this.router.navigate(['/']);
  }
}
