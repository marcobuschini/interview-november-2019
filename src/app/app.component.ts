import { Component, Input } from '@angular/core';

import { WidgetComponent, Vendor } from 'widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atSistemas-interview';
  vendor: Vendor = {
    name: 'Test Vendor',
    description: 'This is a test vendor',
    features: [
      { name: 'feature 1' },
      { name: 'feature 2' },
      { name: 'feature 3' }
  ]};
  @Input('widget') widget: WidgetComponent
}
