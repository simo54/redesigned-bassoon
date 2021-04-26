import Header from "./component/Header/Header";
import AddBook from "./component/AddBook/AddBook";
import Library from "./component/Library/Library";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AddBook />
      <Library />
    </div>
  );
}

export default App;
