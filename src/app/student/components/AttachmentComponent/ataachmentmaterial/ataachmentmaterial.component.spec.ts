import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaachmentmaterialComponent } from './ataachmentmaterial.component';

describe('AtaachmentmaterialComponent', () => {
  let component: AtaachmentmaterialComponent;
  let fixture: ComponentFixture<AtaachmentmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtaachmentmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtaachmentmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
