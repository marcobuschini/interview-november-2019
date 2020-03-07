import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WidgetModule } from 'widget';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetModule.forRoot(),
    MatListModule,
    MatRadioModule,
    BrowserAnimationsModule,
    TranslateModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
