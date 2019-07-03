import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';

const routes: Routes = [
  { path: 'user', component: UserDisplayComponent },
  { path: 'git',component: GitreposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
