import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsceduleComponent } from './addscedule.component';

describe('AddsceduleComponent', () => {
  let component: AddsceduleComponent;
  let fixture: ComponentFixture<AddsceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsceduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
