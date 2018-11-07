import { switchMap, map } from 'rxjs/operators';
import { BookActionTypes, LoadBooksSuccess } from './../actions/book.actions';
import { BookStoreService } from './../shared/book-store.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private service: BookStoreService) {
  }

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.service.getAll()),
    map(books => new LoadBooksSuccess(books))
  );
}
