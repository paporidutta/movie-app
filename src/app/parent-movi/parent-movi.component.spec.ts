import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMoviComponent } from './parent-movi.component';

describe('ParentMoviComponent', () => {
  let component: ParentMoviComponent;
  let fixture: ComponentFixture<ParentMoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentMoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
