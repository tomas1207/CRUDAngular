import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDisplayComponent } from './user-display/user-display.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';
import { TempoComponent } from './tempo/tempo.component';

const routes: Routes = [
  { path: 'user', component: UserDisplayComponent },
  { path: 'git',component: GitreposComponent},
  { path: 'tempo', component: TempoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
