import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/`)
    .then((res) => res.text())
    .then((data) => setMsg(data))
    .catch(err => console.log(err));
}, []);


  return (
    <div>
      <h1>Frontend Working!</h1>
      <p>Message from backend: {msg}</p>
    </div>
  );
}

export default App;
