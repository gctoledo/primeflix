import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Pagina nao encontrada!</h2>
      <Link to={"/"}>Voltar para pagina inicial</Link>
    </div>
  );
};

export default Error;
