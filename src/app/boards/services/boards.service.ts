/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/consts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BoardsService {

  private mainBoardURL: string = `${BASE_URL}boards/bd8faa9c-72c8-4859-9867-7a0d0112c8e7/`;

  constructor(public http: HttpClient) {}


  public getBoards$(): Observable<any>{
    return this.http.get(BASE_URL + 'boards');
  }

  getLists(){
    this.http.get(this.mainBoardURL + 'columns').subscribe((value) => {
      console.log(value);
    });
  }

  createBoard(){
    this.http.post(BASE_URL + 'boards', {
      'title': 'New board',
      'description': 'description'
    }).subscribe();
  }

  deleteBoard(id: string){
    this.http.delete(BASE_URL + 'boards/' + id).subscribe();
  }

  createList(){
    this.http.post(this.mainBoardURL + 'columns', { 'title': 'Done', 'order': 1 })
      .subscribe(value => {
        console.log(value);
      });
  }

  deleteList(){
    this.http.delete(this.mainBoardURL + 'columns/dfcedcf3-af90-43aa-a351-f70b4eeba7be').subscribe();
  }

  createListItem(){
    this.http.post(
      this.mainBoardURL + 'columns/dfcedcf3-af90-43aa-a351-f70b4eeba7be/tasks', {
        'title': 'Task: pet the cat',
        'done': false,
        'order': 1,
        'description': 'Domestic cat needs to be stroked gently',
        'userId': 'dbc4626d-a899-4c8a-92d6-9773253f8129',
      },
    ).subscribe(
      value => { console.log(value); },
    );
  }

}
