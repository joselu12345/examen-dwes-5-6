import { insertarPizza } from "@/lib/actions";

function PizzaInsertar() {
    return (
        <form action={insertarPizza}>            
            <input name="nombre" placeholder="nombre" />
            <input name="precio" placeholder="precio" />

            {/* {
                estudiantes.map(estudiante =>
                    <label key={estudiante.id} className="block">
                        <input
                            type='checkbox'                            
                            value={estudiante.nombre} />
                        {estudiante.nombre}
                    </label>
                )
            } */}

            <button className="border-2 border-black">Insertar pizza</button>
        </form>
    );
}

export default PizzaInsertar;