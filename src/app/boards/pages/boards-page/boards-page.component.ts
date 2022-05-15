/* eslint-disable @typescript-eslint/indent */
/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/keyword-spacing */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoardsModel, DialogData } from '../../models/boards-models';
import { BoardsService } from '../../services/boards.service';

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrls: ['./boards-page.component.scss'],
})
export class BoardsPageComponent implements OnInit {

  public boards$: Observable<BoardsModel[]> = this.boardService.getBoards$();

  constructor(
    public boardService: BoardsService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.boards$.subscribe();
  }

  public getBoards(){
    this.boards$ = this.boardService.getBoards$();
  }

  public openDialogCreateBoard(){
    const boardTitle: string = '';
    const boardDescription: string = '';
    const dialogRef = this.dialog.open(DialogAddBoard, {
      width: '300px',
      data: {
        title: boardTitle,
        description: boardDescription,
      },
    });

    dialogRef.afterClosed().subscribe(board => {
      if(!board) return;
      if(board.description === '') board.description = 'description';
      if(board.title !== '') {
        this.boardService.createBoard(board.title, board.description);
        this.getBoards();
      }
    });
  }

  public openDialogDeleteBoard(id: string){
    const dialogRef = this.dialog.open(DelateBoardDialog);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.boardService.deleteBoard(id);
        this.getBoards();
      }
    });
  }

  public goToBoardsEdit(id: string){
    this.router.navigate([`boards/edit/${id}`]);
  }
}

@Component({
  selector: 'delate-board-dialog',
  templateUrl: '././dialog/dialog-elements-delate-board.html',
  styleUrls: ['./boards-page.component.scss'],
})
export class DelateBoardDialog {
  constructor(public dialog: MatDialog){}
}

@Component({
  selector: 'dialog-add-board',
  templateUrl: './dialog/dialog-elements-add-board.html',
  styleUrls: ['./boards-page.component.scss'],
})
export class DialogAddBoard {
  constructor(
    public dialogRef: MatDialogRef<DialogAddBoard>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


