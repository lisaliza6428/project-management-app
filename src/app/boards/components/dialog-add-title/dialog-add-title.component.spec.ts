import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddList } from './dialog-add-title.component';

describe('DialogComponent', () => {
  let component: DialogAddList;
  let fixture: ComponentFixture<DialogAddList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddList ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
