import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  lists: ListComponent[] = [];

  addList() {
    const newList = new ListComponent();
    this.lists.push(newList);
  }

}
