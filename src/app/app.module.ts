import { TimesVisitedService } from './services/times-visited.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimesVisitedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
