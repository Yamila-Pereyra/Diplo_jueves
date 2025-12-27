import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="holder">
        <li><Link href="/quiensomos">Quienes somos</Link></li>
        <li><Link href="/servicio">Servicios</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
