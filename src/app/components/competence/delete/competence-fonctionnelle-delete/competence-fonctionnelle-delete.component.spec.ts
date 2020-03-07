import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceFonctionnelleDeleteComponent } from './competence-fonctionnelle-delete.component';

describe('CompetenceFonctionnelleDeleteComponent', () => {
  let component: CompetenceFonctionnelleDeleteComponent;
  let fixture: ComponentFixture<CompetenceFonctionnelleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceFonctionnelleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceFonctionnelleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
