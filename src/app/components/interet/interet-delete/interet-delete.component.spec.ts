import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteretDeleteComponent } from './interet-delete.component';

describe('InteretDeleteComponent', () => {
  let component: InteretDeleteComponent;
  let fixture: ComponentFixture<InteretDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteretDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteretDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
