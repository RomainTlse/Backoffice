import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteretEditComponent } from './interet-edit.component';

describe('InteretEditComponent', () => {
  let component: InteretEditComponent;
  let fixture: ComponentFixture<InteretEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteretEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteretEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
