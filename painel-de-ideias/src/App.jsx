import { useState } from "react";
import "./App.css";

function App() {

  const [ideias, setIdeias] = useState([]);

  const [novaIdeia, setNovaIdeia] = useState("");

  const [erro, setErro] = useState("");

  function aoAdicionar(event) {
    event.preventDefault();

    if (novaIdeia.trim() === "") {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }

    const ideia = { id: Date.now(), texto: novaIdeia.trim(), feita: false };
    setIdeias((atual) => [...atual, ideia]);
    setNovaIdeia("");
    setErro("");
  }

  function aoDigitar(event) {
    setNovaIdeia(event.target.value);
    setErro("");
  }

  function aoMarcar(id) {
    setIdeias((atual) =>
      atual.map((ideia) =>
        ideia.id === id ? { ...ideia, feita: !ideia.feita } : ideia
      )
    );
  }

  function aoRemover(id) {
    setIdeias((atual) => atual.filter((ideia) => ideia.id !== id));
  }

  const total = ideias.length;
  const concluidas = ideias.filter((ideia) => ideia.feita).length;

  return (
    <div className="painel">
      <h1>Painel de Ideias</h1>

      <form onSubmit={aoAdicionar}>
        <input
          type="text"
          placeholder="Qual é a sua ideia?"
          value={novaIdeia}
          onChange={aoDigitar}
        />
        <button type="submit">Adicionar</button>
      </form>

      {erro && <p className="erro">{erro}</p>}

      <ul>
        {ideias.map((ideia) => (
          <li key={ideia.id}>
            <input
              type="checkbox"
              checked={ideia.feita}
              onChange={() => aoMarcar(ideia.id)}
            />
            <span className={ideia.feita ? "texto feita" : "texto"}>
              {ideia.texto}
            </span>
            <button onClick={() => aoRemover(ideia.id)}>✕</button>
          </li>
        ))}
      </ul>

      <p className="contador">
        {`${total} ideias no painel · ${concluidas} concluídas`}
      </p>
    </div>
  );
}

export default App;