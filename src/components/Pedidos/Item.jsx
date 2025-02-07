import { obtenerPedido } from "@/lib/data";

async function Pedido({ id }) {
    const pedido = await obtenerPedido(id)
    return (
        <div>

            <p>{pedido.id}</p>
            <p>{pedido.nombreCliente}</p>
            <p>{pedido.direccionCliente}</p>
            <p>{pedido.fecha_y_hora}</p>
        </div>
    );
}

export default Pedido;