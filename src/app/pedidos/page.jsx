import Pedidos from "@/components/Pedidos/Lista";
import { Suspense } from "react";

function PaginaPedidos() {
    return (

        <div>
            <h1>Listado de pedidos</h1>
            <Suspense fallback='obteniendo datos .....'>
                <Pedidos />
            </Suspense>
        </div>

    );
}

export default PaginaPedidos;