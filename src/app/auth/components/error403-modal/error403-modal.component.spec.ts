import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error403ModalComponent } from './error403-modal.component';

describe('Error403ModalComponent', () => {
  let component: Error403ModalComponent;
  let fixture: ComponentFixture<Error403ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error403ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error403ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
