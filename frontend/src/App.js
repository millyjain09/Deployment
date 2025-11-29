import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMsg(data));
  }, []);

  return (
    <div>
      <h1>Frontend Working!</h1>
      <p>Message from backend: {msg}</p>
    </div>
  );
}

export default App;
