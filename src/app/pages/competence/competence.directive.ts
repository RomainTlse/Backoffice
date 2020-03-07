import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-competence-content]'
})

export class CompetenceDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
