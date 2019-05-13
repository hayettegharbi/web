import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http' ;
import {FormsModule,ReactiveFormsModule} from '@angular/forms' ;
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { MoniteursService } from './services/moniteurs.service';
import { AuthGuardService } from './services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { bookformComponent } from './book-list/book-form/book-form.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { SignupComponent } from './auth/signup/signup.component';
import {HeaderComponent} from './header/header.component';
import { SingleMoniteurComponent } from './moniteur-list/single-moniteur/single-moniteur.component';
import { FormMoniteurComponent } from './moniteur-list/form-moniteur/form-moniteur.component';
import { MoniteurListComponent } from './moniteur-list/moniteur-list.component'

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: bookformComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: 'moniteurs', canActivate: [AuthGuardService], component: MoniteurListComponent },
  { path: 'moniteurs/new', canActivate: [AuthGuardService], component: FormMoniteurComponent },
  { path: 'moniteurs/view/:id', canActivate: [AuthGuardService], component: SingleMoniteurComponent },
  { path: '', redirectTo: 'moniteurs', pathMatch: 'full' },
  { path: '**', redirectTo: 'moniteurs' }
];
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    bookformComponent,
    SingleBookComponent,
    SingleMoniteurComponent,
    FormMoniteurComponent,
    MoniteurListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
providers: [AuthService, BooksService, AuthGuardService,MoniteursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
