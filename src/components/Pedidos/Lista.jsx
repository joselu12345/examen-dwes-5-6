import Modal from "@/components/Modal";
import { obtenerPedidos } from "@/lib/data";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import Link from "next/link";

async function Pedidos() {
    const pedidos = await obtenerPedidos()


    return (

        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar pedido</p>}>
                <PedidoInsertar />
            </Modal>

            {
                pedidos.map(pedido =>
                    <div>
                        <div key={pedido.id}>
                            <Link href={`/pedidos/${pedido.id}`} className="text-2xl block">
                                {pedido.nombreCliente}
                            </Link>
                            <p>{pedido.direccionCliente}</p>
                            <p>{pedido.fecha_y_hora}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PedidoModificar pedido={pedido} />
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PedidoEliminar pedido={pedido} />
                        </Modal>

                        <hr />

                    </div>
                )
            }

        </div>

    );
}

export default Pedidos;