interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
};


export const EjercicioCuatro = () => {

    const alumnos: Alumno[] = [
        {
            name: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            name: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            name: "Gerson",
            edad: 18,
            calificacion: 9,
        }
    ];


    return (
        <div >
            <h2>Ejercicio 4</h2>
            <h3>Alumnos</h3>
            <code>
                <pre>
                    {JSON.stringify(alumnos, null, 2)}
                </pre>
            </code>
        </div >
    )
}