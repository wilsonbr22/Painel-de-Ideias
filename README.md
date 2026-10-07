# Painel de Ideias

Um app em React para guardar minhas ideias de projeto. Dá para adicionar uma ideia, marcar quando ela estiver pronta e apagar. Embaixo, um contador mostra quantas ideias tem e quantas já estão prontas.

## Como rodar

```
npm install
npm run dev
```

## Como eu fiz

- Coloquei tudo em um arquivo só (`App.jsx`), porque ainda não aprendemos a dividir em vários componentes.
- Usei três estados: `ideias` (a lista), `novaIdeia` (o que estou digitando) e `erro` (a mensagem quando o campo está vazio).
- O contador não tem estado próprio. Ele conta direto da lista, assim os números sempre ficam certos.
- Usei `Date.now()` para dar um número diferente para cada ideia, e uso esse número como `key`.
- Não usei `localStorage`, então as ideias somem quando a página é recarregada.