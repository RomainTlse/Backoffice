import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTechniqueEditComponent } from './competence-technique-edit.component';

describe('CompetenceTechniqueEditComponent', () => {
  let component: CompetenceTechniqueEditComponent;
  let fixture: ComponentFixture<CompetenceTechniqueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceTechniqueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceTechniqueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
