import { obtenerRepartidor } from "@/lib/data";

async function Repartidor({ id }) {
    const repartidor = await obtenerRepartidor(id)
    return (
        <div>

            <p>{repartidor.id}</p>
            <p>{repartidor.nombreCliente}</p>
            <p>{repartidor.direccionCliente}</p>
            <p>{repartidor.fecha_y_hora}</p>
        </div>
    );
}

export default Repartidor;