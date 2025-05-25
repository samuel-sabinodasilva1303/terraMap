import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className={styles["nav--main"]}>
      <Link className={styles["nav--main__logo"]} href="/">
      <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none"><g transform="scale(0.8) translate(25,25)"> <path d="M50 60 L90 40 L130 60 L170 40 L170 140 L130 160 L90 140 L50 160 Z" fill="#FFF" stroke="#323436" strokeWidth="5"> <animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.5s" fill="freeze" /> </path> <path d="M100 90 C110 90, 120 100, 120 110 C120 130, 100 150, 100 150 C100 150, 80 130, 80 110 C80 100, 90 90, 100 90 Z" fill="#D32F2F" stroke="#B71C1C" strokeWidth="4"> <animate attributeName="transform" type="scale" from="0" to="1" dur="0.8s" begin="0.7s" fill="freeze" /> </path> </g> <text x="100" y="190" fontSize="40" fill="#fff" textAnchor="middle" opacity="0"> <animate attributeName="opacity" from="0" to="1" dur="1s" begin="1s" fill="freeze" /> TerraMap </text> </svg>
      </Link>

      <form className={styles["nav--search"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar local"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className={styles["search-button"]} aria-label="Buscar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z"
            />
          </svg>
        </button>
      </form>


      <ul className={styles["nav--content__item"]}>
        <li>
          <Link className={styles["nav--sobre"]} href="/Sobre">Sobre o Projeto</Link>
        </li>
      </ul>
    </nav>
  );
}
