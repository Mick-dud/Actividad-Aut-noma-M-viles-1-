export const EjercicioTres = () => {
const arr: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const resultadoDividido = arr.map((valor, index) => {
        const resultado = valor / 5;
        console.log("key:", index, "value:", resultado);
        return resultado;
    });

    return (
        <div>
            <h3>Ejercicio 3</h3>
            <ul>
                {resultadoDividido.map((valor, index) => (
                    <li key={index}>Valor dividido: {valor}</li>
                ))}
            </ul>
        </div>
    );
}
