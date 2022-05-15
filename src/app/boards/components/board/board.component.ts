// eslint-disable-next-line import/named
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateLoader } from '@ngx-translate/core';
import { BoardsService } from '../../services/boards.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  public lists: ListComponent[] = [];

  public boardID!: string;

  constructor(
    public translate: TranslateLoader,
    public boardService: BoardsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.boardID = this.route.snapshot.params['id'];
    this.getLists();
  }

  getLists(){
    this.boardService.getLists$(this.boardID).subscribe(lists => {
      this.lists = lists;
      console.log(this.lists);
    });
  }

  createList(){
    const id = this.boardID;
    const order = this.lists.length + 1;
    this.boardService.createList(id, order);
    this.getLists();
  }

  deleteList(){
    this.boardService.deleteList();
  }

  createListItem(){
    this.boardService.createListItem();
  }

}
