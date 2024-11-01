import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedattachmentComponent } from './savedattachment.component';

describe('SavedattachmentComponent', () => {
  let component: SavedattachmentComponent;
  let fixture: ComponentFixture<SavedattachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedattachmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedattachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
