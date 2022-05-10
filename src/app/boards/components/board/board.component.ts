// eslint-disable-next-line import/named
import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  lists: ListComponent[] = [];

  ngOnInit(): void {
    this.addList();
  }

  addList() {
    const newList = new ListComponent();
    this.lists.push(newList);
  }

}
