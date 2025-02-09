import { Button } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

interface DecrementButtonProps {
  onClear: () => void; // Recebe a função que será chamada ao clicar
  disabled: boolean;
}

export function DecrementButton({ onClear, disabled }: DecrementButtonProps) {
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
          fontWeight: "bold",
        },
      }}
      startIcon={<HorizontalRuleIcon />}
      onClick={onClear} // Chama a função passada como prop
      disabled={disabled}
    ></Button>
  );
}
