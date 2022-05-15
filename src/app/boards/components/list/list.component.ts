/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  @Input() title = '';

  items: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onSubmit(newItemForm: NgForm) {
    if(!newItemForm.value.newItem) return;
    this.items.push(newItemForm.value.newItem);
    newItemForm.reset();
  }


}
