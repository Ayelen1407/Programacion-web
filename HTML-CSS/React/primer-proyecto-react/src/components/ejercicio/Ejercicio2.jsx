import { useState } from "react";
export function CapturarInput () {
    const [input, setInput]= useState("")

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }
  return (
    <>
    <input type="text" placeholder="Escribe" onChange={handleInputChange} value={input}/>
    {input && <h2>{input}</h2>}
    </>
    );
}
