import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <Link href={'/repartidores'} className="block">Pagina de Repartidores</Link>
      <Link href={'/pedidos'} className="block">Pagina de Pedidos</Link>
      <Link href={'/pizzas'} className="block">Pagina de Pizzas</Link>
    </div>
    
  );
}
