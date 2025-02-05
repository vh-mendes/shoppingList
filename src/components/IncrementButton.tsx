import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface IncrementButtonProps {
  onClear: () => void; // Recebe a função que será chamada ao clicar
}

export function IncrementButton({ onClear }: IncrementButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#f6c01c",
        "&:hover": { backgroundColor: "#ffb600" },
        color: "#000000",
      }}
      startIcon={<AddIcon />}
      onClick={onClear} // Chama a função passada como prop
    ></Button>
  );
}
