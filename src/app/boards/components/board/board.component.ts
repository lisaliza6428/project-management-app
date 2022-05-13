// eslint-disable-next-line import/named
import { Component, OnInit } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { BoardsService } from '../../services/boards.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  lists: ListComponent[] = [];

  constructor(
    public translate: TranslateLoader,
    public boardService: BoardsService,
  ){}

  ngOnInit(): void {
    this.addList();
  }

  addList() {
    const newList = new ListComponent();
    this.lists.push(newList);
  }

  getLists(){
    this.boardService.getLists();
  }

  createList(){
    this.boardService.createList();
  }

  deleteList(){
    this.boardService.deleteList();
  }

  createListItem(){
    this.boardService.createListItem();
  }

}
