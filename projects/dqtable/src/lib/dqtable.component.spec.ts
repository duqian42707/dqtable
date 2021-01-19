import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DqtableComponent } from './dqtable.component';

describe('DqtableComponent', () => {
  let component: DqtableComponent;
  let fixture: ComponentFixture<DqtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DqtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DqtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
