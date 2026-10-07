import { useState } from "react";

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
          <li key={ideia.id}>{ideia.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;