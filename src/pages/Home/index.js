import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "afbabd53b88dd94436ed292d14176182",
          language: "pt-BR",
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="loading">Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="movies-list">
        {movies.map((movie) => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <Link to={`/movie/${movie.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
