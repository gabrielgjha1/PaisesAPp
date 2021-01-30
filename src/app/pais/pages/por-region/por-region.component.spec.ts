import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorRegionComponent } from './por-region.component';

describe('PorRegionComponent', () => {
  let component: PorRegionComponent;
  let fixture: ComponentFixture<PorRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
