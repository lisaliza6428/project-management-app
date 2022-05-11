import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error409ModalComponent } from './error409-modal.component';

describe('Error409ModalComponent', () => {
  let component: Error409ModalComponent;
  let fixture: ComponentFixture<Error409ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error409ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error409ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
