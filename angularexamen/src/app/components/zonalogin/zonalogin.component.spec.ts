import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaloginComponent } from './zonalogin.component';

describe('ZonaloginComponent', () => {
  let component: ZonaloginComponent;
  let fixture: ComponentFixture<ZonaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
