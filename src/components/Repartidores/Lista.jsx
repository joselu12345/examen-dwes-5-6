import { obtenerRepartidores } from "@/lib/data";

async function Repartidores() {
    const repartidores = await obtenerRepartidores()

    return (

        <div>
            {
                repartidores.map(repartidor =>
                    <div key={repartidor.id}>
                        <Link href={`/repartidores/${repartidor.id}`} className="text-2xl block">
                            {repartidor.nombre}
                        </Link>
                        <p>{repartidor.telefono}</p>
                    </div>

                )
            }
        </div>

    );
}

export default Repartidores;