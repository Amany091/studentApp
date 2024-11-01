import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRlistComponent } from './qrlist.component';

describe('QRlistComponent', () => {
  let component: QRlistComponent;
  let fixture: ComponentFixture<QRlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
