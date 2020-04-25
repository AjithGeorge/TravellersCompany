import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMinimumComponent } from './footer-minimum.component';

describe('FooterMinimumComponent', () => {
  let component: FooterMinimumComponent;
  let fixture: ComponentFixture<FooterMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMinimumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
