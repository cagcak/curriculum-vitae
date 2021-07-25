/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractResume } from './abstract-resume';

describe('AbstractResume', () => {
  let component: AbstractResume;
  let fixture: ComponentFixture<AbstractResume>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AbstractResume],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
