import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {BookListComponent} from "../book-list/book-list.component";
import {Observable} from "rxjs";

@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<BookListComponent> {

  constructor() { }

  canDeactivate(component: BookListComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return confirm('Are you sure?');
  }

}
