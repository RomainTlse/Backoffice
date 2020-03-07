import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-formation-content]'
})
export class FormationDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
