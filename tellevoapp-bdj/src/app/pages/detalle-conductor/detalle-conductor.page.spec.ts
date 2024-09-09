import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleConductorPage } from './detalle-conductor.page';

describe('DetalleConductorPage', () => {
  let component: DetalleConductorPage;
  let fixture: ComponentFixture<DetalleConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
