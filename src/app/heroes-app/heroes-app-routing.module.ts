import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'Home',
        component: HomePageComponent
      },
      {
        path: 'Characters',
        component: CharactersPageComponent
      },
      {
        path: '**',
        redirectTo : 'Home'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesAppRoutingModule { }
