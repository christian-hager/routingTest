import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit(){}

goToPage2() {
  this.router.navigate(["../", "page2"], {
    relativeTo: this.route
  });
}

  goToPage4() {
    this.router.navigate(["page4"], {
      relativeTo: this.route
    });
  }

}
