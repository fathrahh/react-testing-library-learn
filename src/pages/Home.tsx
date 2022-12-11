import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Home Page</p>
      <div>
        <button onClick={() => navigate("/about", { replace: true })}>
          About
        </button>
      </div>
    </div>
  );
}
