import styles from "./Sobre.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Sobre() {
  return (
    <>
    <Navbar />
    <section className={styles.sobreProjeto} id="sobre">
      <h2>Sobre o TerraMap</h2>
      <p>
        O <strong>TerraMap</strong> nasceu com um propósito simples: ajudar produtores agrícolas a
        monitorar suas áreas de trabalho de forma prática e eficiente. Sabemos que gerenciar máquinas,
        trajetos e recursos no campo pode ser complicado — por isso, criamos uma ferramenta intuitiva
        que facilita esse processo.
      </p>

      <p>
        Com o TerraMap, você pode marcar no mapa as áreas percorridas pelas máquinas, acompanhar o consumo
        de combustível, o tempo gasto em cada tarefa e ter uma visão clara do desempenho das suas operações.
        Tudo pensado para tornar o dia a dia no campo mais organizado e produtivo.
      </p>

      <h3>Quem está por trás?</h3>
      <p>
        Esse projeto foi desenvolvido com dedicação por um time talentoso de estudantes da
        <strong> Universidade Virtual do Estado de São Paulo (Univesp)</strong>:
      </p>

      <ul className={styles.responsaveis}>
        <li>Gislaine Rado Madureira Paulino</li>
        <li>Guilherme Berto Dourado</li>
        <li>Raphael de Melo Silva</li>
        <li>Samuel Sabino da Silva</li>
        <li>Gabriel Iório de Oliveira</li>
      </ul>

      <p>
        Estamos comprometidos em oferecer soluções digitais que façam a diferença no campo e esperamos
        que o TerraMap seja uma ferramenta útil para todos que desejam gerenciar suas operações agrícolas
        de maneira moderna e eficiente.
      </p>
    </section>
    <Footer />
    </>
  );
}
