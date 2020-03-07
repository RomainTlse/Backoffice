import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceFonctionnelleEditComponent } from './competence-fonctionnelle-edit.component';

describe('CompetenceFonctionnelleEditComponent', () => {
  let component: CompetenceFonctionnelleEditComponent;
  let fixture: ComponentFixture<CompetenceFonctionnelleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceFonctionnelleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceFonctionnelleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
