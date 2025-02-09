import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface ClearItemProps {
  onClear: () => void;
}

export function ClearItemButton({ onClear }: ClearItemProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#f6c01c",
        color: "#000000",
        fontWeight: "bold",
        fontSize: "14px ",
        textTransform: "uppercase",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        padding: "2px",
        "& .MuiButton-startIcon": {
          display: "flex",
          marginRight: "2px",
        },
      }}
      startIcon={<DeleteIcon />}
      onClick={onClear}
    ></Button>
  );
}
