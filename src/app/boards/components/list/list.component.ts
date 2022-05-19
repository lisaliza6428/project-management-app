/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  @Input() title = '';

  @Input() id = '';

  @Output() newItemEvent = new EventEmitter<string>();

  items: string[] = []; //['item1', 'item2'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
//        console.log(this.items);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
//        console.log(this.items);
    }
  }

  public onSubmit(newItemForm: NgForm) {
    if(!newItemForm.value.newItem) return;
    this.items.push(newItemForm.value.newItem);
    newItemForm.reset();
  }

  getListID(id: string) {
    this.newItemEvent.emit(id);
  }

  deleteItem() {
    //console.log('delete');
  }
}
