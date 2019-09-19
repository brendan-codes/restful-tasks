import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
//   { path: 'index', component: IndexComponent },
//   { path: 'create', component: CreateComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'show/:id', component: ShowComponent },
//   { path: '', pathMatch: 'full', redirectTo: '/index' },
//   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
