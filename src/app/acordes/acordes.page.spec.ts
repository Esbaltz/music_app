import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcordesPage } from './acordes.page';

describe('AcordesPage', () => {
  let component: AcordesPage;
  let fixture: ComponentFixture<AcordesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
