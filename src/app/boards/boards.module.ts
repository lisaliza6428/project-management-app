/* eslint-disable import/no-extraneous-dependencies */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { BoardsRoutingModule } from './boards-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './components/board/board.component';
import { TranslateModule } from '@ngx-translate/core';
import { BoardsPageComponent, DelateBoardDialog, DialogAddBoard } from './pages/boards-page/boards-page.component';
import { NgMaterialModule } from '../ng-material/ng-material/ng-material.module';


@NgModule({
  declarations: [
    ListComponent,
    BoardComponent,
    BoardsPageComponent,
    DelateBoardDialog,
    DialogAddBoard,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    DragDropModule,
    FormsModule,
    TranslateModule,
    NgMaterialModule,
  ],
})
export class BoardsModule { }
