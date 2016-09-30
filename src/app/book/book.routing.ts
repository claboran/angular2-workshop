/**
 * Created by cla on 9/30/16.
 */
import {Routes, RouterModule} from "@angular/router";
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {BookComponent} from "./book.component";

const routes: Routes = [
  {path: 'books',
    component: BookComponent,
    children: [{
      component: BookListComponent,
      path: ''
    },
      {
      component: BookDetailComponent,
        path: ':isbn'
      }
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BookRoutingModule { }
