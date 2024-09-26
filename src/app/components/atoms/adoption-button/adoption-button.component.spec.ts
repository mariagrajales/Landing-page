import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionButtonComponent } from './adoption-button.component';

describe('AdoptionButtonComponent', () => {
  let component: AdoptionButtonComponent;
  let fixture: ComponentFixture<AdoptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
