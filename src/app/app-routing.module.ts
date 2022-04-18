import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondidateListComponent } from './condidate-list/condidate-list.component';
import { HomeComponent } from './home/home.component';
import { UrnesComponent } from './urnes/urnes.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { CondidateComponent } from './condidate/condidate.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'urnes', component: UrnesComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'condidateList', component: CondidateListComponent },
  { path: 'condidate', component: CondidateComponent },
  { path: 'vote', component: VoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
