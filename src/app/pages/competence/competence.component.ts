import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {CompetenceDirective} from './competence.directive';
import {CompetenceListComponent} from '../../components/competence/list/competence-list/competence-list.component';
import {CompetenceTechniqueEditComponent} from '../../components/competence/edit/competence-technique-edit/competence-technique-edit.component';
import {CompetenceFonctionnelleEditComponent} from '../../components/competence/edit/competence-fonctionnelle-edit/competence-fonctionnelle-edit.component';
import {CompetenceOutilOsEditComponent} from '../../components/competence/edit/competence-outil-os-edit/competence-outil-os-edit.component';
import {CompetenceService} from '../../services/competence.service';
import {CompetenceTechniqueDeleteComponent} from '../../components/competence/delete/competence-technique-delete/competence-technique-delete.component';
import {CompetenceFonctionnelleDeleteComponent} from '../../components/competence/delete/competence-fonctionnelle-delete/competence-fonctionnelle-delete.component';
import {CompetenceOutilOsDeleteComponent} from '../../components/competence/delete/competence-outil-os-delete/competence-outil-os-delete.component';

interface IComp {
  output: any;
}

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  @ViewChild(CompetenceDirective, {static: true}) appCompetenceContent: CompetenceDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private competenceService: CompetenceService) { }

  ngOnInit() {
    this.loadComponent('list');
  }

  loadComponent(component) {
    let componentFactory;

    switch (component) {
      case 'list':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceListComponent);
        break;

      case 'technique-edit':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceTechniqueEditComponent);
        break;

      case 'fonctionnelle-edit':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceFonctionnelleEditComponent);
        break;

      case 'outil-os-edit':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceOutilOsEditComponent);
        break;

      case 'technique-delete':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceTechniqueDeleteComponent);
        break;

      case 'fonctionnelle-delete':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceFonctionnelleDeleteComponent);
        break;

      case 'outil-os-delete':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceOutilOsDeleteComponent);
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
    const load = this.competenceService.getComponentToLoad();
    if (load) {
      load.subscribe(
        (value) => {
          this.loadComponent(value);
        });
    }
  }
}
