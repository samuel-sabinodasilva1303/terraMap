import Link from "next/link";
import Image from "next/image";
//import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <div>
        <Image src="/logo.png" alt="Logo do Projeto" width={50} height={50} />
      </div>
      <ul>
        <li>
          <Link href="#sobre">Sobre o Projeto</Link>
        </li>
        <li>
          <Link href="#desenvolvedores">Participantes/Alunos</Link>
        </li>
      </ul>
    </nav>
  );
}
