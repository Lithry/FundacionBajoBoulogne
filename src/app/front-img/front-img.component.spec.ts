import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontImgComponent } from './front-img.component';

describe('FrontImgComponent', () => {
  let component: FrontImgComponent;
  let fixture: ComponentFixture<FrontImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
