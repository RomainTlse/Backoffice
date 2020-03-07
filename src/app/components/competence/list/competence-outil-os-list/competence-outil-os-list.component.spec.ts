import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceOutilOsListComponent } from './competence-outil-os-list.component';

describe('CompetenceOutilOsListComponent', () => {
  let component: CompetenceOutilOsListComponent;
  let fixture: ComponentFixture<CompetenceOutilOsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceOutilOsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceOutilOsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
