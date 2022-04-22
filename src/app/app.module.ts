import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UrnesComponent } from './urnes/urnes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CondidateListComponent } from './condidate-list/condidate-list.component';
import { UsersComponent } from './users/users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AdminsComponent } from './admins/admins.component';
import { UsersDialogComponent } from './users-dialog/users-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { VoteComponent } from './vote/vote.component';
import { CondidateComponent } from './condidate/condidate.component';
import { CondidateDialogComponent } from './condidate-dialog/condidate-dialog.component';
import { AdminsDialogComponent } from './admins-dialog/admins-dialog.component';
import { VoteDialogComponent } from './vote-dialog/vote-dialog.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    UrnesComponent,
    CondidateListComponent,
    UsersComponent,
    AdminsComponent,
    UsersDialogComponent,
    VoteComponent,
    CondidateComponent,
    CondidateDialogComponent,
    AdminsDialogComponent,
    VoteDialogComponent,
    ListDialogComponent,
    AdminDashComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
