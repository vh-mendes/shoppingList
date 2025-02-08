import { TextField } from "@mui/material";

interface InputItemProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputItem({ value, onChange}: InputItemProps) {
  return (
    <TextField
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label="Item"
      placeholder="Digite para adicionar um item"
      InputLabelProps={{
        shrink: true, 
      }}
      sx={{
        width: "225px",
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