import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./movie.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "afbabd53b88dd94436ed292d14176182",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("ERROR");
        });
    }

    loadMovie();

    return () => {
      console.log("componente desmontado");
    };
  }, []);

  if (loading) {
    return (
      <div className="movie-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>

      <div className="button-area">
        <button>Salvar</button>
        <button>
          <a href="#">Trailer</a>
        </button>
      </div>
    </div>
  );
};

export default Movie;
