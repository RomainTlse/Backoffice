import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-interet-content]'
})
export class InteretDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
