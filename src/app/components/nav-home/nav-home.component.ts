import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {
  public isMenuCollapsed = true;

  inaktifLift = false;
  pathIsKontakt = false;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    if ( this.location.path() === '/kontakt') {
      this.pathIsKontakt = true;
    } else {
      this.pathIsKontakt = false;
    }

    setTimeout(() => this.inaktifLift = true, 3800);
  }
}
