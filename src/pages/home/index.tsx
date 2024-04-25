import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/playground")}>Go to Playground</Button>
  );
}
