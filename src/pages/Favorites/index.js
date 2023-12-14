import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import "./favorites.css";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  const handleMovie = (id) => {
    let filterMovies = movies.filter((movie) => movie.id !== id);

    setMovies(filterMovies);
    localStorage.setItem("@primeflix", JSON.stringify(filterMovies));

    toast.success("Filme removido com sucesso");
  };

  return (
    <div className="my-list">
      <h1>Meus filmes</h1>
      {movies.length === 0 && <span>Você não possui filmes salvos!</span>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title}</span>
            <div>
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
              <button onClick={() => handleMovie(movie.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
