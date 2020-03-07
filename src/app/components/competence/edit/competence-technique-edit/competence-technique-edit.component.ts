import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-competence-technique-edit',
  templateUrl: './competence-technique-edit.component.html',
  styleUrls: ['./competence-technique-edit.component.scss']
})
export class CompetenceTechniqueEditComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  formFramework: boolean;
  isLinear: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formFramework = false;
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  displayFormFramework() {
    this.formFramework = true;
  }

}
