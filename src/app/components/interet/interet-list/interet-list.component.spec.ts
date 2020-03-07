import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteretListComponent } from './interet-list.component';

describe('InteretListComponent', () => {
  let component: InteretListComponent;
  let fixture: ComponentFixture<InteretListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteretListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteretListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
