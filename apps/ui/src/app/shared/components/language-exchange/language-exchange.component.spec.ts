import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageExchangeComponent } from './language-exchange.component';

describe('LanguageExchangeComponent', () => {
  let component: LanguageExchangeComponent;
  let fixture: ComponentFixture<LanguageExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
