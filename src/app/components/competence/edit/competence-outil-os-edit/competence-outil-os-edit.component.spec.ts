import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceOutilOsEditComponent } from './competence-outil-os-edit.component';

describe('CompetenceOutilOsEditComponent', () => {
  let component: CompetenceOutilOsEditComponent;
  let fixture: ComponentFixture<CompetenceOutilOsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceOutilOsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceOutilOsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
