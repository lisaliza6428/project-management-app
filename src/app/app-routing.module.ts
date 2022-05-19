/* eslint-disable import/named */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { WelcomePageComponent } from './core/pages/welcome-page/welcome-page.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full',
  },
  {
    path: 'boards',
    loadChildren: () => import('./boards/boards.module').then(m => m.BoardsModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
