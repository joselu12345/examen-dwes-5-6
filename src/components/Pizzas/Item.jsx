import { obtenerPizza } from "@/lib/data";

async function Pizza({ id }) {
    const pizza = await obtenerPizza(id)
    return (
        <div>

            <p>{pizza.id}</p>
            <p>{pizza.nombreCliente}</p>
            <p>{pizza.direccionCliente}</p>
            <p>{pizza.fecha_y_hora}</p>
        </div>
    );
}

export default Pizza;