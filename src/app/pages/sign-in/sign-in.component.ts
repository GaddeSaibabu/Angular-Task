import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SigninComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.authService.signIn().subscribe((response) => {
        console.log('called')
        this.router.navigate(['/albums']);
      });
    }, 5000);
  }
}
