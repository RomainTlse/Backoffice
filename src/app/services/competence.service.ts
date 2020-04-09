import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private componentToLoad: Subject<string>;
  private data$: Observable<string>;

  constructor() {
    this.componentToLoad = new Subject<string>();
    this.data$ = this.componentToLoad.asObservable();
  }

  getComponentToLoad(): Observable<string> {
    return this.data$;
  }

  setComponentToLoad(value: string) {
      this.componentToLoad.next(value);
  }
}
