import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesManagerComponent } from './places-manager.component';

describe('PlacesManagerComponent', () => {
  let component: PlacesManagerComponent;
  let fixture: ComponentFixture<PlacesManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesManagerComponent]
    });
    fixture = TestBed.createComponent(PlacesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
