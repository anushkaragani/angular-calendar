import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCompComponent } from './drag-comp.component';

describe('DragCompComponent', () => {
  let component: DragCompComponent;
  let fixture: ComponentFixture<DragCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
