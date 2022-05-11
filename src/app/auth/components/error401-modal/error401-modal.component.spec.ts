import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error401ModalComponent } from './error401-modal.component';

describe('Error401ModalComponent', () => {
  let component: Error401ModalComponent;
  let fixture: ComponentFixture<Error401ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error401ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error401ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
