import { ClearItemButton } from "./ClearItemButton";

interface Item {
  id: number;
  nome: string;
  quantidade: number;
  comprado: boolean;
}

interface ItemListProps {
  items: Item[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export function ItemList({ items, onToggle, onRemove }: ItemListProps) {
  return (
    <ul className="shoppingList">
      {items.map((item) => (
        <li
          className={`shoppingListItem ${item.comprado ? "checked" : ""}`}
          key={item.id}
        >
          <input
            type="checkbox"
            checked={item.comprado}
            onChange={() => onToggle(item.id)}
          />
          <span className="itemName">{item.nome}</span>
          <span
            className={item.comprado ? "itemQuantityChecked" : "itemQuantity"}
          >
            Qtd: {item.quantidade}
          </span>
          <div className="clearItemButton">
            <ClearItemButton onClear={() => onRemove(item.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
}
