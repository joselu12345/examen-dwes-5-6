import { eliminarPedido } from "@/lib/actions";

function PedidoEliminar({ pedido }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes pedidos?</h1>
            <p>PEDIDO: {pedido.id}</p>
            <p>FECHA Y HORA: {pedido.fecha_y_hora}</p>
            <p>NOMBRE DEL CLIENTE: {pedido.nombreCliente}</p>
            <p>DIRECCION DEL CLIENTE: {pedido.direccionCliente}</p>
            <form action={eliminarPedido}>
                <input type="hidden" name="id" defaultValue={pedido.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PedidoEliminar;