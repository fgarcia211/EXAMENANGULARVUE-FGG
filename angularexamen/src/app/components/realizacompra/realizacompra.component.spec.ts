import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizacompraComponent } from './realizacompra.component';

describe('RealizacompraComponent', () => {
  let component: RealizacompraComponent;
  let fixture: ComponentFixture<RealizacompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizacompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizacompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
