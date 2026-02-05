import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundtripFormComponent } from './roundtrip-form.component';

describe('RoundtripFormComponent', () => {
  let component: RoundtripFormComponent;
  let fixture: ComponentFixture<RoundtripFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundtripFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundtripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
