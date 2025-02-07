import { insertarPedido } from "@/lib/actions";


function PedidoInsertar({repartidores}) {
    return (
        <form action={insertarPedido}>            
            <input name="fecha_y_hora" type='date' />
            <input name="nombreCliente" placeholder="nombreCliente" />
            <input name="direccionCliente" placeholder="direccionCliente" />

            <select name="repartidorId">
            {
                repartidores.map(repartidor =>
                    <label key={repartidor.id} className="block">
                        <input
                            type='checkbox'                            
                            value={repartidor.nombre} />
                        {repartidor.nombre}
                    </label>
                )
            }
            </select>

            <button className="border-2 border-black">Insertar pedido</button>
        </form>
    );
}

export default PedidoInsertar;