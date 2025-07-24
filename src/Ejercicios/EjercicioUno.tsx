export const EjercicioUno = () => {
    const area = (): number => {
        return 6 * 10;
    }

    return (
        <div>
            <h2>Ejercicio 1</h2>
            <h6>El área de un cuadrado</h6>
            <span>El resultado del area es: {area()}</span>
        </div>
    )
}
