import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./components/AddMovie/AddMovie";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";
import { moviedata } from "./data";
function App() {
  const [movielist, setMovielist] = useState(moviedata);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const handleAdd = (newMovie) => {
    setMovielist([...movielist, newMovie]);
  };
  const handleDelete = (id) => {
    setMovielist(movielist.filter((movie) => movie.id !== id));
  };
  return (
    <div className="App">
      <NavBar
        title={title}
        handleChange={handleChange}
        rate={rate}
        ratingChanged={ratingChanged}
      />
      <MovieList
        handleDelete={handleDelete}
        movielist={movielist.filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase()) &&
            movie.rate >= rate
        )}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
