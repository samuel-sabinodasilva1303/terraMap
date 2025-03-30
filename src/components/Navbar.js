import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles["nav--main"]}>
      <div className={styles["nav--main__logo"]}>
      <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none"><g transform="scale(0.8) translate(25,25)"> <path d="M50 60 L90 40 L130 60 L170 40 L170 140 L130 160 L90 140 L50 160 Z" fill="#FFF" stroke="#323436" stroke-width="5"> <animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.5s" fill="freeze" /> </path> <path d="M100 90 C110 90, 120 100, 120 110 C120 130, 100 150, 100 150 C100 150, 80 130, 80 110 C80 100, 90 90, 100 90 Z" fill="#D32F2F" stroke="#B71C1C" stroke-width="4"> <animate attributeName="transform" type="scale" from="0" to="1" dur="0.8s" begin="0.7s" fill="freeze" /> </path> </g> <text x="100" y="190" font-size="40" fill="#fff" text-anchor="middle" opacity="0"> <animate attributeName="opacity" from="0" to="1" dur="1s" begin="1s" fill="freeze" /> TerraMap </text> </svg>
      </div>
      <ul className={styles["nav--content__item"]}>
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
