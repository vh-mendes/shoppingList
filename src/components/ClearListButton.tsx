import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface ClearListProps {
  text: string;
  onClear: () => void; // Recebe a função que será chamada ao clicar
}

export function ClearListButton({ text, onClear }: ClearListProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#f6c01c",
        "&:hover": { backgroundColor: "#ffb600" },
        color: "#000000",
      }}
      startIcon={<DeleteForeverIcon />}
      onClick={onClear} // Chama a função passada como prop
    >
      {text}
    </Button>
  );
}
