import { Component } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-parcel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public props$ = singleSpaPropsSubject;
  title = 'angular-parcel';
}
