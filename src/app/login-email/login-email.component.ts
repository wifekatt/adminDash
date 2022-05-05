import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
  }

  goToDash(){
    this.router.navigate(['/adminDash']);
  }

}
