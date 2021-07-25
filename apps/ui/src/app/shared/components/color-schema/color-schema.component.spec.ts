import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSchemaComponent } from './color-schema.component';

describe('ColorSchemaComponent', () => {
  let component: ColorSchemaComponent;
  let fixture: ComponentFixture<ColorSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSchemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
