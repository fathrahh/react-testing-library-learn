import { useNavigate } from "react-router-dom";
import { Gap, Line } from "../components";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <p>About</p>
      <Gap />
      <Line color="black" />
      <div>
        <button onClick={() => navigate("/", { replace: true })}>Home</button>
      </div>
    </div>
  );
}
