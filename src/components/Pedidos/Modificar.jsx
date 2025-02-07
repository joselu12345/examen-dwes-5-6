import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido }) {
    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />
            <input name='fecha_y_hora' defaultValue={pedido.fecha_y_hora} />
            <input name='nombreCliente' defaultValue={pedido.nombreCliente} />
            <input name='direccionCliente' defaultValue={pedido.direccionCliente} />            

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;