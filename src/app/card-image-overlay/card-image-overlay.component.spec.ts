import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageOverlayComponent } from './card-image-overlay.component';

describe('CardImageOverlayComponent', () => {
  let component: CardImageOverlayComponent;
  let fixture: ComponentFixture<CardImageOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImageOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
