import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaAlumnoComponent } from './captura-alumno.component';

describe('CapturaAlumnoComponent', () => {
  let component: CapturaAlumnoComponent;
  let fixture: ComponentFixture<CapturaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
