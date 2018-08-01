import { JSONSchema } from '@ngx-pwa/local-storage';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable ,  of } from 'rxjs';

@Injectable()
export class TimesVisitedService {
  value: number;
  constructor()
  constructor(protected localStorage?: LocalStorage){
    this.Load();
  }

  Load(): void {
    if (this.localStorage){
      this.localStorage.getItem<number>('hwTimesVisited').subscribe(data => {
        if (data) {
          this.value = data;
        } else {
          this.value = 1;
        }
      });
    } else {
      console.log('no local storage');
    }
  }

  Save(): void {
    if (this.localStorage){
      this.value++;

      this.localStorage.setItem('hwTimesVisited', this.value).subscribe(data => {
        console.log('Saved Times visited successfully. ' + JSON.stringify(data));
      }, error => {
        const err = 'Unable to save times visited';
        console.log(err);
        });
    } else {
      console.log('No local storage');
    }
  }

  Reset(): void {
    const reset = 1;
    this.localStorage.setItem('hwTimesVisited', reset).subscribe
    (data => {
      this.value = reset;
    }, error => {
      console.log('Unable to Reset');
    });
  }

  Clone(): TimesVisitedService {
    console.log('entering clone');
    const clone = new TimesVisitedService();
    clone.value = this.value;
    return clone;
  }
}
