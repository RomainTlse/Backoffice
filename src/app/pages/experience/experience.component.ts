import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ExperienceDirective} from './experience.directive';
import {ExperienceListComponent} from '../../components/experience/experience-list/experience-list.component';
import {ExperienceEditComponent} from '../../components/experience/experience-edit/experience-edit.component';
import {ExperienceDeleteComponent} from '../../components/experience/experience-delete/experience-delete.component';

interface IComp {
  output: any;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @ViewChild(ExperienceDirective, {static: true}) appExperienceContent: ExperienceDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent('list');
  }

  loadComponent(component) {
    let componentFactory;

    switch (component) {
      case 'list':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExperienceListComponent);
        break;

      case 'edit':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExperienceEditComponent);
        break;

      case 'delete':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExperienceDeleteComponent);
        break;
    }

    const viewContainerRef = this.appExperienceContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    if ((componentRef.instance as IComp).output) {
      (componentRef.instance as IComp).output.subscribe(
        data => this.loadComponent(data)
      );
    }
  }
}
