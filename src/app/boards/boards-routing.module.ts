import { NgModule } from '@angular/core';
// eslint-disable-next-line import/named
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BoardsPageComponent } from './pages/boards-page/boards-page.component';

const routes: Routes = [
  {
    path: '',
    component: BoardsPageComponent,
  },
  {
    path: 'edit/:id',
    component: BoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule { }
