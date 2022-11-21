import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreausuarioComponent } from './creausuario.component';

describe('CreausuarioComponent', () => {
  let component: CreausuarioComponent;
  let fixture: ComponentFixture<CreausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreausuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
