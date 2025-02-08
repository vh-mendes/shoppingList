import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { AddToListButton } from "./AddToListButton";
import { ClearListButton } from "./ClearListButton";
import { DecrementButton } from "./DecrementButton";
import { IncrementButton } from "./IncrementButton";
import { InputQuantity } from "./InputQuantity";
import { InputItem } from "./InputItem";
import { SubTitle } from "./SubTitle";
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
    if (newQuantity < 0) {
      setError("A quantidade não pode ser negativa");
      //setTimeout(() => setError(""), 2000); // Limpa a mensagem de erro após 3 segundos
      return; //Se a quantidade for negativa, não adiciona e aborta
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

  const buttonIncrement = () => {
    setNewQuantity(newQuantity + 1);
  };
  const buttonDecrement = () => setNewQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div>
      <div className="alerts">
        {error && <Alert severity="error">{error}</Alert>}
        {/*Se houver erro, exibe a mensagem de erro*/}
        {sucess && <Alert severity="success">{sucess}</Alert>}
        {/*Se houver sucesso, exibe a mensagem de sucesso*/}
      </div>
      <div className="inputItem">
        <InputItem value={newItem} onChange={setNewItem} />
      </div>
      <div className="inputQuantity">
        <DecrementButton
          onClear={buttonDecrement}
          disabled={newQuantity === 1}
        />
        <InputQuantity value={newQuantity} onChange={setNewQuantity} />
        <IncrementButton onClear={buttonIncrement} />
      </div>
      <div className="addButonList"> 
      <AddToListButton text="Adicionar" onClear={AddItem} />
      </div>
      <SubTitle text="Itens na Lista" />
      <ClearListButton text="Limpar Lista" onClear={RemoveList} />
      <ul>
        {itemsNaoComprados.map((item, id) => (
          <li key={id}>
            {item.nome}
            <input type="number" value={item.quantidade}></input>
            <button onClick={() => RemoveItem(item.id)}>Remover</button>{" "}
            <button onClick={() => ItemComprado(item.id)}>
              {item.comprado ? "Desmarcar" : "Marcar como Comprado"}
            </button>
          </li>
        ))}
      </ul>

      <SubTitle text="Itens Comprados" />
      <ClearListButton text="Limpar Lista" onClear={RemoveListComprado} />
      <ul>
        {itemsComprados.map((item, id) => (
          <li className="itensComprados" key={id}>
            {item.nome} - Quantidade: {item.quantidade}
            <button onClick={() => RemoveItem(item.id)}> Remover</button>{" "}
            <button onClick={() => ItemComprado(item.id)}>
              {item.comprado ? "Desmarcar" : "Marcar como Comprado"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
