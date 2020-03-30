import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit(){}

  goToPage3() {
    this.router.navigate(["page3"], {
      relativeTo: this.route
    });
  }

}
