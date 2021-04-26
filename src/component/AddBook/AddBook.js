import React, { useState } from "react";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);

  const addBookHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title">Author</label>
        <input
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="title">Rating</label>
        <input
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="number"
          min="1"
          max="10"
        />

        <button onClick={addBookHandler}>Add Book</button>
      </form>
    </>
  );
}
