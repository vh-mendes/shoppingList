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
        color: "#000000",
        textAlign: "center",
        alignItems: "center",
        padding: "10px",
        "& .MuiButton-startIcon": {
          display: "flex",
          marginRight: "4px",
          fontWeight: "bold"
        },
      }}
      startIcon={<AddIcon />}
      onClick={onClear} // Chama a função passada como prop
    ></Button>
  );
}
