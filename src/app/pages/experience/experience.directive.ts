import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-experience-content]'
})
export class ExperienceDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
