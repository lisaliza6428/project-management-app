/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable import/named */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
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
    this.boardService.getBoards$().subscribe((data: BoardsModel[]) => {
      this.boards = data;
      console.log(this.boards);
    });
  }

  public createBoard(){
    this.boardService.createBoard();
  }

  public openDialog(id: string){
    console.log(id);
    this.dialog.open(DelateBoardDialog);
  }
}

@Component({
  selector: 'delate-board-dialog',
  templateUrl: './delate-board-dialog.html',
})
export class DelateBoardDialog {}


