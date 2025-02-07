import Pizza from "@/components/Pizzas/Item";
import { Suspense } from "react";

async function PaginaPizza({ params }) {

    const { id } = await params
    return (

        <div>
            <h1>Datos del pizza</h1>
            <Suspense fallback='obteniendo datos .....'>
                <Pizza id={id} />
            </Suspense>
        </div>

    );
}

export default PaginaPizza;