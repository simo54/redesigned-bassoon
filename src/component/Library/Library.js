import React from "react";

export default function Library() {
  const deleteBook = () => {
    alert("js");
  };

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
        <tr>
          <td>Dune</td>
          <td>ddd</td>
          <td>5</td>
          <td>
            <button onClick={() => deleteBook()}>x</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
