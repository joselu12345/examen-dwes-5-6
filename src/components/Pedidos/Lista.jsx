import { obtenerPedidos } from "@/lib/data";

async function Pedidos() {
    const pedidos = await obtenerPedidos()

    return (

        <div>
            {
                pedidos.map(pedido =>
                    <div key={pedido.id}>
                        <Link href={`/pedidos/${pedido.id}`} className="text-2xl block">
                            {pedido.nombreCliente}
                        </Link>
                        <p>{pedido.direccionCliente}</p>
                        <p>{pedido.fecha_y_hora}</p>
                    </div>

                )
            }
        </div>

    );
}

export default Pedidos;