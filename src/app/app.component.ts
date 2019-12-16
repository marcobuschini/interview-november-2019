import { Component, ViewChild, OnInit } from '@angular/core';

import { WidgetComponent, Vendor } from 'widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'interview-november-2019';
  public vendor: Vendor = {
    name: 'Test Vendor',
    description: 'This is a test vendor',
    features: [
      { name: 'feature 1' },
      { name: 'feature 2' },
      { name: 'feature 3' }
  ]};
  @ViewChild('widget', { static: true })
  public widget: WidgetComponent;

  public ngOnInit() {
    this.widget.vendor = this.vendor;
  }
}
