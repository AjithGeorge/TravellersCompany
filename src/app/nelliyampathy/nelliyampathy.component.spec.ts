import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NelliyampathyComponent } from './nelliyampathy.component';

describe('NelliyampathyComponent', () => {
  let component: NelliyampathyComponent;
  let fixture: ComponentFixture<NelliyampathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NelliyampathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NelliyampathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
