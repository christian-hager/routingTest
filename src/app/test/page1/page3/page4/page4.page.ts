import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit(){}

  goToPage5() {
    this.router.navigate(["../", "page5"], {
      relativeTo: this.route
    });
  }
}
