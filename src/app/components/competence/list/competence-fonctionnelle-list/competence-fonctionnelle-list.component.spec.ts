import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceFonctionnelleListComponent } from './competence-fonctionnelle-list.component';

describe('CompetenceFonctionnelleListComponent', () => {
  let component: CompetenceFonctionnelleListComponent;
  let fixture: ComponentFixture<CompetenceFonctionnelleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceFonctionnelleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceFonctionnelleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
