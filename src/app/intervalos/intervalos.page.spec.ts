import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntervalosPage } from './intervalos.page';

describe('IntervalosPage', () => {
  let component: IntervalosPage;
  let fixture: ComponentFixture<IntervalosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
