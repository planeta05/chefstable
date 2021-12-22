import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Martin");

  const handleInputChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <div className="App">
      <input onChange={(event) => handleInputChange(event)} />
      <h1>Hello {name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
