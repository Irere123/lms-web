import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch("http://localhost/index.php");
      const data = await resp.json();

      console.log(data);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
