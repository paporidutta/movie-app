import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ParentMoviComponent} from './parent-movi/parent-movi.component';
import {MovieComponent} from './movie/movie.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {SearchMovieComponent} from './search-movie/search-movie.component';
import {FavouriteListComponent} from './favourite-list/favourite-list.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
 
  {path:'movie',component: MovieComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'favourite-list',component: FavouriteListComponent},
  {path:'parent-movi',component:ParentMoviComponent}
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
