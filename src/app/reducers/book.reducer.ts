import { BookActions, BookActionTypes } from './../actions/book.actions';
import { Book } from './../shared/book';
import { Action } from '@ngrx/store';


export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {
    case BookActionTypes.LoadBooks: {
      return {
        ...state,
        loading: true
      };
    }
    case BookActionTypes.LoadBooksSuccess: {
      const books = action.payload;
      return {
        ...state,
        loading: false,
        books
      };
    }
    default:
      return state;
  }
}
