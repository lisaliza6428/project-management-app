/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/consts';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BoardsService {

  private mainBoardURL: string = `${BASE_URL}boards/bd8faa9c-72c8-4859-9867-7a0d0112c8e7/`;

  constructor(public http: HttpClient) {}

  public getBoards$(): Observable<any>{
    return this.http.get(BASE_URL + 'boards').pipe(
      retry(2),
      debounceTime(500),
      catchError(error => {
        // console.log('[ERROR]', error);
        return error;
      })
    );
  }

  createBoard(title: string, description: string){
    this.http.post(BASE_URL + 'boards', {
      'title': title,
      'description': description,
    }).subscribe();
  }

  deleteBoard(id: string){
    this.http.delete(BASE_URL + 'boards/' + id).subscribe();
  }

  getLists$(id: string): Observable<any>{
    return this.http.get(BASE_URL + `boards/${id}/columns`);
  }

  createList(id: string, order: number, title: string){
    this.http.post(
      BASE_URL + `boards/${id}/columns`, 
      { 'title': title, 'order': order }
    ).subscribe();
  }

  deleteList(boardID: string, id: string,){
    this.http.delete(BASE_URL + `boards/${boardID}/columns/${id}`).subscribe();
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
      value => { 
        //console.log(value); 
      },
    );
  }
}
