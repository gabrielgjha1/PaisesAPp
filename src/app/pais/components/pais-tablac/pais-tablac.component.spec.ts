import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisTablacComponent } from './pais-tablac.component';

describe('PaisTablacComponent', () => {
  let component: PaisTablacComponent;
  let fixture: ComponentFixture<PaisTablacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisTablacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisTablacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
