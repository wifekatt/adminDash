import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  title = 'adminDash';
  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {

  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
