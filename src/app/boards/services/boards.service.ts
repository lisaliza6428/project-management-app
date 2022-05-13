/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/consts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {

  private mainBoardURL: string = `${BASE_URL}boards/27919670-f1e2-49b4-befd-046cdba9fa51`;

  constructor(public http: HttpClient) {}

  getLists(){
    this.http.get(this.mainBoardURL).subscribe((value) => {
      console.log(value);
    });
  }

  createList(){
    this.http.post(this.mainBoardURL + '/columns', { 'title': 'Done', 'order': 3 })
      .subscribe(value => {
        console.log(value);
      });
  }

  deleteList(){
    this.http.delete(this.mainBoardURL + '/columns/65145522-eb0d-4652-b85b-fba2ba17c504').subscribe();
  }

}
