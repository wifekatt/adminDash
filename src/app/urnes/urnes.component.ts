import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urnes',
  templateUrl: './urnes.component.html',
  styleUrls: ['./urnes.component.css']
})
export class UrnesComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
