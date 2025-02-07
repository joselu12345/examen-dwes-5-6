import Pedido from "@/components/Pedidos/Item";
import { Suspense } from "react";

async function PaginaPedido({ params }) {

    const { id } = await params
    return (

        <div>
            <h1>Datos del pedido</h1>
            <Suspense fallback='obteniendo datos .....'>
                <Pedido id={id} />
            </Suspense>
        </div>

    );
}

export default PaginaPedido;