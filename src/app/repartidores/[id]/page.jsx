import Repartidor from "@/components/Repartidores/Item";
import { Suspense } from "react";

async function PaginaRepartidor({ params }) {

    const { id } = await params
    return (

        <div>
            <h1>Datos del repartidor</h1>
            <Suspense fallback='obteniendo datos .....'>
                <Repartidor id={id} />
            </Suspense>
        </div>

    );
}

export default PaginaRepartidor;