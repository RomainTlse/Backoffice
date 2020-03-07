import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceOutilOsDeleteComponent } from './competence-outil-os-delete.component';

describe('CompetenceOutilOsDeleteComponent', () => {
  let component: CompetenceOutilOsDeleteComponent;
  let fixture: ComponentFixture<CompetenceOutilOsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceOutilOsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceOutilOsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
