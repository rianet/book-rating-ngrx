import { Book } from '../../shared/book';
import { BooksActions, BooksActionTypes } from '../actions/books.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
  selectedIsbn: string;
}

const initialState: BooksState = {
  books: [],
  loading: false,
  selectedIsbn: null
};

export function booksReducer(state: BooksState = initialState, action: BooksActions): BooksState {
  switch (action.type) {

    // TODO: LoadBooks
    // TODO: LoadBooksFail
    // TODO: LoadBooksSuccess




    case BooksActionTypes.LoadBook: {
      return { ...state, loading: true };
    }

    case BooksActionTypes.LoadBookFail: {
      return { ...state, loading: false };
    }

    case BooksActionTypes.LoadBookSuccess: {
      const book = action.payload;

      const cleanedList = state.books.filter(b => b.isbn !== state.selectedIsbn);
      const books = [...cleanedList, book];

      return { ...state, books, loading: false };
    }

    case BooksActionTypes.SelectBook: {
      const selectedIsbn = action.payload;
      return { ...state, selectedIsbn };
    }


    default: {
      return state;
    }
  }
}
