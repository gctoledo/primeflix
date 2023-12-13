import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./favorites.css";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  return (
    <div className="my-list">
      <h1>Meus filmes</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title}</span>
            <div>
              <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
              <button>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
