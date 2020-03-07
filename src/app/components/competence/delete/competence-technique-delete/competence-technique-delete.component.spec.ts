import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTechniqueDeleteComponent } from './competence-technique-delete.component';

describe('CompetenceTechniqueDeleteComponent', () => {
  let component: CompetenceTechniqueDeleteComponent;
  let fixture: ComponentFixture<CompetenceTechniqueDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceTechniqueDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceTechniqueDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
