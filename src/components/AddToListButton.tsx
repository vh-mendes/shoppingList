import { Button } from "@mui/material";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

interface AddToListProps {
  text: string;
  onClear: () => void; // Recebe a função que será chamada ao clicar
}

export function AddToListButton({ text, onClear }: AddToListProps) {
  return (
    <Button
      variant="contained"
      sx={{
        width: "225px",
        backgroundColor: "#f6c01c",
        color: "#000000",
        fontWeight: "bold",
        fontSize: "18px ",
        textTransform: "uppercase",
        padding: "10px",
        fontFamily: "'Poppins', sans-serif",
        "& .MuiButton-startIcon": {
          display: "flex",
          marginRight: "4px",
          marginLeft: "10px",
        },
      }}
      startIcon={<ShoppingCartRounded />}
      onClick={onClear}
    >
      {text}
    </Button>
  );
}
