import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Bem-vindo ao Projeto Integrador III!</h1>
      <section id="map">
        <Map />
      </section>
      <section id="desenvolvedores">
        <h2>Desenvolvedores</h2>
      </section>
      <Footer />
    </div>
  );
}
