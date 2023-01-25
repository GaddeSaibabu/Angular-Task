import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'default-layout',
  templateUrl: './default.component.html',
})
export class DefaultLayoutComponent {
  constructor(private router: Router) {}

  public get isSignedIn(): boolean {
    return (
      localStorage.getItem(Constants.TOKEN_KEY) != null &&
      localStorage.getItem(Constants.TOKEN_KEY) !== ''
    );
  }

  public onSignoutClick() {
    localStorage.clear();
    this.router.navigate(['/explore'])
  }
}
