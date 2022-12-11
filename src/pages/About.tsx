import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div>
      <p>About</p>
      <div>
        <button onClick={() => navigate("/", { replace: true })}>Home</button>
      </div>
    </div>
  );
}
