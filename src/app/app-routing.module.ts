import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/books'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WorkshopRoutingModule { }
