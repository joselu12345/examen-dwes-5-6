import Modal from "@/components/Modal";
import { obtenerPizzas } from "@/lib/data";
import PizzaInsertar from "./Insertar";
import PizzaModificar from "./Modificar";
import PizzaEliminar from "./Eliminar";
import Link from "next/link";

async function Pizzas() {
    const pizzas = await obtenerPizzas()

    return (

        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar pizzas</p>}>
                <PizzaInsertar />
            </Modal>

            {
                pizzas.map(pizza =>
                    <div>
                        <div key={pizza.id}>
                            <Link href={`/pizzas/${pizza.id}`} className="text-2xl block">
                                {pizza.nombre}
                            </Link>
                            <p>{pizza.precio}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <PizzaModificar pizza={pizza} />
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <PizzaEliminar pizza={pizza} />
                        </Modal>

                        <hr />

                    </div>
                )
            }
        </div>

    );
}

export default Pizzas;