import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Heroes', loadChildren: ()=> import('./heroes-app/heroes-app.module').then(m => m.HeroesAppModule)},
  {path: '**', redirectTo: 'Heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
