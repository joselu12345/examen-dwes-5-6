import Pizzas from "@/components/Pizzas/Lista";
import { Suspense } from "react";

function PaginaPizzas() {
    return (

        <div>
            <h1>Listado de pizzas</h1>
            <Suspense fallback='obteniendo datos .....'>
                <Pizzas />
            </Suspense>
        </div>

    );
}

export default PaginaPizzas;