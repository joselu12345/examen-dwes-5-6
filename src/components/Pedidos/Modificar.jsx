import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input type='date' defaultValue={pedido.fecha_y_hora.toISOString().split('T')[0]} />
            <input name='nombreCliente' defaultValue={pedido.nombreCliente} />
            <input name='direccionCliente' defaultValue={pedido.direccionCliente} />            

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;