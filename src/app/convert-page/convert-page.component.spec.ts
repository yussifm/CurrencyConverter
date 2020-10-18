import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPageComponent } from './convert-page.component';

describe('ConvertPageComponent', () => {
  let component: ConvertPageComponent;
  let fixture: ComponentFixture<ConvertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
