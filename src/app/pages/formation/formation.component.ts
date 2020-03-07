import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {FormationDirective} from './formation.directive';
import {FormationListComponent} from '../../components/formation/formation-list/formation-list.component';
import {FormationEditComponent} from '../../components/formation/formation-edit/formation-edit.component';
import {FormationDeleteComponent} from '../../components/formation/formation-delete/formation-delete.component';

interface IComp {
  output: any;
}

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  @ViewChild(FormationDirective, {static: true}) appCompetenceContent: FormationDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent('list');
  }

  loadComponent(component) {
    let componentFactory;

    switch (component) {
      case 'list':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormationListComponent);
        break;

      case 'edit':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormationEditComponent);
        break;

      case 'delete':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(FormationDeleteComponent);
        break;
    }

    const viewContainerRef = this.appCompetenceContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    if ((componentRef.instance as IComp).output) {
      (componentRef.instance as IComp).output.subscribe(
        data => this.loadComponent(data)
      );
    }
  }
}
