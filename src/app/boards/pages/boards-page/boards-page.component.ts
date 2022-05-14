/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsModel } from '../../models/boards-models';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss'],
})
export class BoardsPageComponent implements OnInit {

  public boards: BoardsModel[] | undefined;

  constructor(public boardService: BoardsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBoards();
  }

  public getBoards(){
    this.boardService.getBoards$().subscribe((data: BoardsModel[]) => {
      this.boards = data;
//      console.log(this.boards);
    });
  }

  public createBoard(){
    this.boardService.createBoard();
    this.getBoards();
  }

  public openDialog(id: string){
    const dialogRef = this.dialog.open(DelateBoardDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.boardService.deleteBoard(id);
        this.getBoards();
      }
    });
  }

  public goToBoardsEdit(id: string){
    console.log(id);
  }
}

@Component({
  selector: 'delate-board-dialog',
  templateUrl: './delate-board-dialog.html',
  styleUrls: ['./boards-page.component.scss'],
})
export class DelateBoardDialog {

  constructor(public dialog: MatDialog){}

}


