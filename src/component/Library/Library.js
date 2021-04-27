import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../store/slices/bookSlice";

export default function Library() {
  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(deleteBook({ id: id }));
  };

  const books = useSelector((state) => state.books.books);

  const booksTable = books.map((book) => (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <td>
        <button onClick={() => deleteBookHandler(book.id)}>x</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Library</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        <tr>{booksTable}</tr>
      </table>
    </div>
  );
}
