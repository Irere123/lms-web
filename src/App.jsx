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
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
