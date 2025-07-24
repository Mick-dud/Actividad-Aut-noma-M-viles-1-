import { useState } from "react"

export const EjercicioCinco = () => {
    //hook usestate para manejar el estado del contador
    const [contador, setContador] = useState<number>(0);

    //funcion para incrementar el contador
    const gestionContador = (num: number): void => {
        //llamar a la funcion setContador para actualizar el estado
        setContador(contador + num); //1+1 => 2
    }
    const gestionContadorr = (num: number): void => {
        //llamar a la funcion setContador para actualizar el estado
        setContador(contador - num); //
    }
    const resetContador = (): void => {
        setContador(0);
    }

    //call back () => llamar una funcion dentro de otra funcion
    return (
        <div>
            <h3>Ejercicio 5</h3>
            <h3>Contador: <small>{contador}</small></h3>
            <button className="btn btn-outline-success" onClick={() => gestionContador(1)}>+1</button>
            &nbsp;{/*espaciado pequeño*/}
            <button className="btn btn-outline-danger" onClick={() => gestionContadorr(1)}>-1</button>
            &nbsp;
            <button className="btn btn-outline-info" onClick={resetContador}>Reset</button>
            

        </div>
    )
}