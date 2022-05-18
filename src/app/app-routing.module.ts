import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondidateListComponent } from './condidate-list/condidate-list.component';
import { HomeComponent } from './home/home.component';
import { UrnesComponent } from './urnes/urnes.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { CondidateComponent } from './candidate/condidate.component';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';
import { LoginEmailComponent } from './login-email/login-email.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'urnes', component: UrnesComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'condidateList', component: CondidateListComponent },
  { path: 'condidate', component: CondidateComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'login', component: LoginComponent},
  { path: 'loginemail',component: LoginEmailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
