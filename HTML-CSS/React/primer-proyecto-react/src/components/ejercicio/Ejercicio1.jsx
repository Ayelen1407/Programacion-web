import { useState } from "react";

export function SumaOresta (){
    const [numero, setContador] = useState(5);

    const incrementa = () => setContador(numero + 1);

    const restar = () => setContador(numero - 1);

return (
    <>
    <>Numero: {numero}</>
    <button onClick={incrementa}>Suma</button>
    <button onClick={restar}>Resta</button>
    </>
);
}

