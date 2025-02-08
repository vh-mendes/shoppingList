import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface ClearListProps {
  text: string;
  onClear: () => void;
}

export function ClearListButton({ text, onClear }: ClearListProps) {
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
        "& .MuiButton-startIcon": {
          display: "flex",
          marginRight: "4px",
        },
      }}  
      startIcon={<DeleteForeverIcon />}
      onClick={onClear}
    >
      {text}
    </Button>
  );
}