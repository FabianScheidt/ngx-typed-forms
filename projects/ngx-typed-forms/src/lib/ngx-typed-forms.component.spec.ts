import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTypedFormsComponent } from './ngx-typed-forms.component';

describe('NgxTypedFormsComponent', () => {
  let component: NgxTypedFormsComponent;
  let fixture: ComponentFixture<NgxTypedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTypedFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTypedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
