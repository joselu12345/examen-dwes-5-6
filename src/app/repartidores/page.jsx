import Repartidores from "@/components/Repartidores/Lista";
import { Suspense } from "react";

function PaginaRepartidores() {
    return (

        <div>
            <h1>Listado de repartidores</h1>
            <Suspense fallback='obteniendo datos .....'>
                <Repartidores />
            </Suspense>
        </div>

    );
}

export default PaginaRepartidores;