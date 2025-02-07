import { obtenerPizzas } from "@/lib/data";

async function Pizzas() {
    const pizzas = await obtenerPizzas()

    return (

        <div>
            {
                pizzas.map(pizza =>
                    <div key={pizza.id}>
                        <Link href={`/pizzas/${pizza.id}`} className="text-2xl block">
                            {pizza.nombre}
                        </Link>
                        <p>{pizza.precio}</p>
                    </div>

                )
            }
        </div>

    );
}

export default Pizzas;