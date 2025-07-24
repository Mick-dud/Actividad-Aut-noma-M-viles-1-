import { EjercicioCinco } from "./Ejercicios/EjercicioCinco";
import { EjercicioCuatro } from "./Ejercicios/EjercicioCuatro";
import { EjercicioDos } from "./Ejercicios/EjercicioDos";
import { EjercicioTres } from "./Ejercicios/EjercicioTres";
import { EjercicioUno } from "./Ejercicios/EjercicioUno";





function App() {
  return (
    <div className="nt-2">
      <h1 style={{textAlign: "center"}}>Ejercicios Actividad Autonoma 1</h1>
      <hr />
      <EjercicioUno/>
      <hr />
      <EjercicioDos/>
      <hr />
      <EjercicioTres/>
      <hr />
      <EjercicioCuatro/>
      <hr />
      <EjercicioCinco/>
    </div>
  );
}

export default App;