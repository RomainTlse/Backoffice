import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {InteretDirective} from './interet.directive';
import {InteretListComponent} from '../../components/interet/interet-list/interet-list.component';
import {InteretEditComponent} from '../../components/interet/interet-edit/interet-edit.component';
import {InteretDeleteComponent} from '../../components/interet/interet-delete/interet-delete.component';

interface IComp {
  output: any;
}

@Component({
  selector: 'app-interet',
  templateUrl: './interet.component.html',
  styleUrls: ['./interet.component.scss']
})
export class InteretComponent implements OnInit {

  @ViewChild(InteretDirective, {static: true}) appCompetenceContent: InteretDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent('list');
  }

  loadComponent(component) {
    let componentFactory;

    switch (component) {
      case 'list':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(InteretListComponent);
        break;

      case 'edit':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(InteretEditComponent);
        break;

      case 'delete':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(InteretDeleteComponent);
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
