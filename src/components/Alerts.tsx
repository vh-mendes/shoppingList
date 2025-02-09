import { Alert } from "@mui/material";

interface AlertsProps {
  error: string;
  success: string;
}

export function Alerts({ error, success }: AlertsProps) {
  return (
    <div className="alerts">
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
    </div>
  );
}