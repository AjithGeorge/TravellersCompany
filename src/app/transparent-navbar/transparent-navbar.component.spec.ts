import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentNavbarComponent } from './transparent-navbar.component';

describe('TransparentNavbarComponent', () => {
  let component: TransparentNavbarComponent;
  let fixture: ComponentFixture<TransparentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransparentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
