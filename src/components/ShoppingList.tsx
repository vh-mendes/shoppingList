import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import "../styles/listStyles.css";

export function ShoppingList() {
  const [items, setItems] = useState<
    { id: number; nome: string; quantidade: number; comprado: boolean }[]
  >(JSON.parse(localStorage.getItem("items") || "[]")); //Armazeno os itens da lista
  const [newItem, setNewItem] = useState<string>("");
  const [newQuantity, setNewQuantity] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [sucess, setSucess] = useState<string>("");

  const RemoveItem = (id: number) => {
    setError("");
    setSucess("");
    setItems(items.filter((item) => item.id !== id)); //Remove o item da lista
    setSucess("Item removido com sucesso");
  };

  const itemsNaoComprados = items.filter((item) => !item.comprado); //Filtra os itens não comprados
  const itemsComprados = items.filter((item) => item.comprado); //Filtra os itens comprados

  const RemoveList = () => {
    setError("");
    setSucess("");
    //Remove todos os itens da lista de não comprados
    if (itemsNaoComprados.length > 0) {
      setItems(items.filter((item) => item.comprado));
      setSucess("Lista limpa com sucesso");
    } else {
      //Se não houver itens não comprados, exibe o erro
      setError("Não há itens na lista para remover");
      //setTimeout(() => setError(""), 2000); // Limpa a mensagem de erro após 3 segundos
    }
  };

  const RemoveListComprado = () => {
    setError("");
    setSucess("");
    //Remove todos os itens da lista de não comprados
    if (itemsComprados.length > 0) {
      setItems(items.filter((item) => !item.comprado));
      setSucess("Lista limpa com sucesso");
    } else {
      //Se não houver itens comprados, exibe o erro
      setError("Não há itens na lista para remover");
      //setTimeout(() => setError(""), 2000); // Limpa a mensagem de erro após 3 segundos
    }
  };

  const ItemComprado = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    ); //Marca o item como comprado
  };

  const AddItem = () => {
    //Reseta os alertas antes de qualquer coisa
    setError("");
    setSucess("");

    if (newItem.trim() === "") {
      setError("O item não pode ser vazio");
      //setTimeout(() => setError(""), 2000); // Limpa a mensagem de erro após 3 segundos
      return; //Se o item for vazio, não adiciona
    }
    if (newQuantity == 0) {
      setError("A quantidade não pode ser zero");
      //setTimeout(() => setError(""), 2000); // Limpa a mensagem de erro após 3 segundos
      return; //Se a quantidade for zero, não adiciona e aborta
    }
    setItems([
      ...items,
      {
        id: Date.now(),
        nome: newItem,
        quantidade: newQuantity,
        comprado: false,
      },
    ]); //Adiciona o item na lista
    setNewItem(""); //Reseta o campo de nome para o padrão
    setNewQuantity(1); //Reseta o campo de quantidade para o padrão
    setSucess("Item adicionado com sucesso"); //Reseta o campo de erro para o padrão
    //setTimeout(() => setSucess(""), 2000); // Limpa a mensagem de sucesso após 3 segundos
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items)); //Convertendo o item
  }, [items]);

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      {/*Se houver erro, exibe a mensagem de erro*/}
      {sucess && <Alert severity="success">{sucess}</Alert>}
      {/*Se houver erro, exibe a mensagem de erro*/}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Digite para adicionar um item"
      />
      <input
        type="number"
        value={newQuantity}
        onChange={(e) => setNewQuantity(Number(e.target.value))}
        min="1"
      />
      <Button variant="contained" color="primary" onClick={AddItem}>
        Adicionar
      </Button>
      <h2>Itens na Lista</h2>
      <button onClick={RemoveList}>Limpar Lista</button>
      <ul>
        {itemsNaoComprados.map((item, id) => (
          <li key={id}>
            {item.nome} - Quantidade: {item.quantidade}
            <button onClick={() => RemoveItem(item.id)}>Remover</button>{" "}
            <button onClick={() => ItemComprado(item.id)}>
              {item.comprado ? "Desmarcar" : "Marcar como Comprado"}
            </button>
            {/* Passa o índice correto */}
          </li>
        ))}
      </ul>

      <h2>Itens Comprados</h2>
      <button onClick={RemoveListComprado}>Limpar Lista</button>
      <ul>
        {itemsComprados.map((item, id) => (
          <li className="itensComprados" key={id}>
            {item.nome} - Quantidade: {item.quantidade}
            <button onClick={() => RemoveItem(item.id)}>Remover</button>{" "}
            <button onClick={() => ItemComprado(item.id)}>
              {item.comprado ? "Desmarcar" : "Marcar como Comprado"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
