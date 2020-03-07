import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-competence-outil-os-edit',
  templateUrl: './competence-outil-os-edit.component.html',
  styleUrls: ['./competence-outil-os-edit.component.scss']
})
export class CompetenceOutilOsEditComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  formOs: boolean;
  formOutils: boolean;

  constructor() { }

  ngOnInit() {
    this.formOs = false;
    this.formOutils = false;
  }

  displayFormOs() {
    this.formOs = true;
  }

  displayFormOutil() {
    this.formOutils = true;
  }

}
