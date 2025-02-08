import { TextField } from "@mui/material";

interface InputQuantityProps {
  value: number;
  onChange: (value: number) => void;
}

export function InputQuantity({ value,onChange}: InputQuantityProps) {
  return (
    <TextField
      type="number"
      value={value === 0 ? "" : value} // Se for 0, fica vazio
      onChange={(e) => onChange(Number(e.target.value))}
      label="Qtd"
      InputLabelProps={{
        shrink: true, 
      }}
      sx={{
        width: "80px",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#fff",
          borderRadius: "8px",
          "& fieldset": {
            borderColor: "#f6c01c",
            borderWidth: "2px"
          },
          "&:hover fieldset": {
            borderColor: "#f6c01c", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "#f6c01c",
          },
        },
        "& .MuiInputBase-input": {
          textAlign: "center",
          fontWeight: "bold",
          color: "#333",
          padding: "10px 10px", 
        },
        "& .MuiInputLabel-root": {
          color: "#f6c01c",
          fontWeight: "bold",
          fontFamily: "Poppins"
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#f6c01c", // Garante que o label mantenha a cor fixa quando focado
        },
        
      }}
    />
  );
}