import { useState } from "react";
import Alert from "@mui/material/Alert";

export function ShoppingList() {
  const [items, setItems] = useState<{ nome: string; quantidade: number; }[]>(
    []
  ); //Armazeno os itens da lista
  const [newItem, setNewItem] = useState<string>("");
  const [newQuantity, setNewQuantity] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [sucess, setSucess] = useState<string>("");

  const RemoveItem = (index: number) => {   
    setItems(items.filter((_, i) => i !== index)); //Remove o item da lista
  }
  const RemoveAllList = () => {
     //Remove todos os itens da lista
    setItems([]);
    }

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
    setItems([...items, { nome: newItem, quantidade: newQuantity }]); //Adiciona o item na lista
    setNewItem(""); //Reseta o campo de nome para o padrão
    setNewQuantity(1); //Reseta o campo de quantidade para o padrão
    setSucess("Item adicionado com sucesso"); //Reseta o campo de erro para o padrão
    //setTimeout(() => setSucess(""), 2000); // Limpa a mensagem de sucesso após 3 segundos
  };

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}{" "}
      {/*Se houver erro, exibe a mensagem de erro*/}
      {sucess && <Alert severity="success">{sucess}</Alert>}{" "}
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
        placeholder="Digite a quantidade"
      />
      <button onClick={AddItem}>Adicionar</button>  
      <button onClick={RemoveAllList}>Limpar Lista</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.nome} - Quantidade: {item.quantidade}
            <button onClick={() => RemoveItem(index)}>Remover</button> {/* Passa o índice correto */}
            </li>
        ))}
      </ul>
    </div>
  );
}
