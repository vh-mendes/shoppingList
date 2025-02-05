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
        "&:hover": { backgroundColor: "#ffb600" },
        color: "#000000",
      }}
      startIcon={<HorizontalRuleIcon />}
      onClick={onClear} // Chama a função passada como prop
      disabled={disabled}
    ></Button>
  );
}
