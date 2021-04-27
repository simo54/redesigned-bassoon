import { createReducer } from "@reduxjs/toolkit";
import { addBook } from "../actions/bookActions";
import { deleteBook } from "../actions/bookActions";

const initialState = {
  books: [],
};

const bookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    });
});

export default bookReducer;
