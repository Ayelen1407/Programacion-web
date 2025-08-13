
import {Persona2} from "./Persona2";

export function Persona({ nombre }) {
    return (
        <>
        <h3>Este es el componente persona</h3>
        <div>hola {nombre}</div>
        <Persona2 />
        </>
    );
}