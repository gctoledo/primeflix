import axios from "axios";

//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=afbabd53b88dd94436ed292d14176182

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
