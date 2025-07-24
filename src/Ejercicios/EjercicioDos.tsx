export const EjercicioDos = () => {
    const suma: (numeros: number[]) => number = (numeros) => {
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
        return suma;
    };

    const resultado = suma([1, 2, 3, 4, 5]);

    return (
        <div>
            <h3>Ejercicio 2</h3>
            <span> Resultado de la suma: {resultado}</span>
        </div>
    );
}
