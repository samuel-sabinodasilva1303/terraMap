import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <section id="map">
        <Map />
      </section>
      <section id="desenvolvedores">
      </section>
      <Footer />
    </div>
  );
}
