import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';
  mountRootParcel = mountRootParcel;
  parcelProps = { customProp1: 'Parent prop1' };
  target = document.body;
  async config() {
    return (window as any).System.import('@app/react-parcel');
  }
  async ngconfig() {
    return (window as any).System.import('@app/angular-parcel');
  }

  parcelMounted():void {
    console.log('React parcel mounted');
  }
  ngparcelMounted():void {
    console.log('Angular parcel mounted');
  }
}
