import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.scss']
})
export class CompetenceListComponent implements OnInit {

  @Output() output = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  loadComponent(component) {
    this.output.emit(component);
  }
}
