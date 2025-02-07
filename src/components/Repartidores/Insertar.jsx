import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form action={insertarRepartidor}>            
            <input name="nombre" placeholder="nombre" />
            <input name="telefono" placeholder="telefono" />

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

            <button className="border-2 border-black">Insertar repartidor</button>
        </form>
    );
}

export default RepartidorInsertar;