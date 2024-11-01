import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursematerialdetailsComponent } from './coursematerialdetails.component';

describe('CoursematerialdetailsComponent', () => {
  let component: CoursematerialdetailsComponent;
  let fixture: ComponentFixture<CoursematerialdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursematerialdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursematerialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
