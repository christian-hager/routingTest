import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToPage1() {
    this.router.navigate(["../page1"], {
      relativeTo: this.route
    });
  }
}
