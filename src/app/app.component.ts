import { Component } from '@angular/core';
import { TimesVisitedService } from './services/times-visited.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-latest-angular';

  cloned: TimesVisitedService;
  constructor(public timesVisited: TimesVisitedService){
    console.log(timesVisited.value);
    this.cloned = timesVisited.Clone();
  }

  saveTimesVisited() {
    this.timesVisited.Save();
  }

  resetTimesVisited() {
    this.timesVisited.Reset();
  }

  cloneTimesVisited() {
      this.cloned = this.timesVisited.Clone();
  }
}
