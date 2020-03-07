import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTechniqueListComponent } from './competence-technique-list.component';

describe('CompetenceTechniqueListComponent', () => {
  let component: CompetenceTechniqueListComponent;
  let fixture: ComponentFixture<CompetenceTechniqueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceTechniqueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceTechniqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
