import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CompetenceTechnique} from '../../../../interfaces/competence-technique';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {CompetenceService} from '../../../../services/competence.service';

const ELEMENT_DATA: Array<CompetenceTechnique> = [
  {name: 'JS', image: 'javascript.svg', interet: 90, frameworks: [{name: 'Angular', image: 'angular.svg'}]},
];

@Component({
  selector: 'app-competence-technique-list',
  templateUrl: './competence-technique-list.component.html',
  styleUrls: ['./competence-technique-list.component.scss']
})
export class CompetenceTechniqueListComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  displayedColumns: string[] = ['name', 'image', 'interet', 'frameworks', 'action'];
  dataSource = ELEMENT_DATA;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  constructor(private competenceService: CompetenceService) { }

  ngOnInit() {
  }

  loadComponent(component) {
    console.log(component);
    this.competenceService.setComponentToLoad(component);
    // this.output.emit(component);
  }
}
