import { insertarPedido } from "@/lib/actions";

function PedidoInsertar() {
    return (
        <form action={insertarPedido}>            
            <input name="fecha_y_hora" placeholder="fecha_y_hora" />
            <input name="nombreCliente" placeholder="nombreCliente" />
            <input name="direccionCliente" placeholder="direccionCliente" />

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

            <button className="border-2 border-black">Insertar pedido</button>
        </form>
    );
}

export default PedidoInsertar;