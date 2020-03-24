import { Component, OnInit } from '@angular/core';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import {Experience} from '../../../interfaces/experience';

import {ExperienceService} from '../../../services/experience.service';

const ELEMENT_DATA: Array<Experience> = [
  {
    date: 'depuis le 16/09/2019',
    titre: 'Développeur',
    entreprise: 'LR Technologies Sud-Ouest',
    client: 'A.GE.D.I',
    preembauche: null,
    adresse: 'Blagnac',
    context: [
      'equipe de 5 personnes'
    ],
    realisations: [
      'partie front des applications'
    ],
    technologies: [
      'AngularJs'
    ],
    outils: [
      'Webstorm'
    ]
  }
];

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'image', 'interet', 'frameworks', 'action'];
  dataSource = ELEMENT_DATA;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faPlusSquare = faPlusSquare;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
  }

  loadComponent(component) {
    this.experienceService.setComponentToLoad(component);
  }
}
