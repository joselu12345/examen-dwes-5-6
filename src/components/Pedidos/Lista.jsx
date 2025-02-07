import Modal from "@/components/Modal";
import { obtenerPedidos, obtenerRepartidores } from "@/lib/data";
import PedidoInsertar from "./Insertar";
import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import Link from "next/link";

export default async function Pedidos() {
    const pedidos = await obtenerPedidos()
    const repartidores = await obtenerRepartidores()

    return (

        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar pedido</p>}>
                <PedidoInsertar repartidores={repartidores} />
            </Modal>

            {
                pedidos.map(pedido =>
                    <div>
                        <div key={pedido.id}>
                            <Link href={`/pedidos/${pedido.id}`} className="text-2xl block">
                                {pedido.nombreCliente}
                            </Link>
                            <p>{pedido.direccionCliente}</p>
                            <p>{pedido.fecha_y_hora.toLocaleDateString()}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PedidoModificar pedido={pedido} repartidores={repartidores}/>
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PedidoEliminar pedido={pedido} repartidores={repartidores} />
                        </Modal>

                        <hr />

                    </div>
                )
            }

        </div>

    );
}

