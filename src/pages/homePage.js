import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
      <div>
      <Link to="/signin"><Button variant="contained">Go to signin</Button></Link>
      </div>

  );
}
