/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/keyword-spacing */
// eslint-disable-next-line import/named
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TranslateLoader } from '@ngx-translate/core';
import { ListModel } from '../../models/boards-models';
import { BoardsService } from '../../services/boards.service';
import { DialogAddList } from '../dialog-add-title/dialog-add-title.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  public lists: ListModel[] = [];

  public boardID!: string;

  constructor(
    public translate: TranslateLoader,
    public dialog: MatDialog,
    public boardService: BoardsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.boardID = this.route.snapshot.params['id'];
    this.getLists();
  }

  public getLists(){
    this.boardService.getLists$(this.boardID).subscribe(lists => {
      this.lists = lists;
//      console.log(this.lists);
    });
  }

  public openDialogCreateList(){
    const titleList: string = '';
    const dialogRef = this.dialog.open(DialogAddList, {
      width: '300px',
      data: {
        title: titleList,
      },
    });

    dialogRef.afterClosed().subscribe(data => {
      if(!data) return;
      if(data.title !== '') {
        this.createList(data.title);
      }
    });
  }

  public createList(title: string){
    const id = this.boardID;
    let order;
    this.lists.length === 0 ? order = 1 : 
      order = this.lists.sort((a, b) => b.order - a.order)[0].order + 1;
    this.boardService.createList(id, order, title);
    this.getLists();
  }

  public async deleteList(id: string){
    this.boardService.deleteList(this.boardID, id);
    this.lists = this.lists.filter(item => item.id !== id);
  }

  createListItem(){
    this.boardService.createListItem();
  }

}
