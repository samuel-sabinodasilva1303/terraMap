import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";

export default function HomePage() {
  return (
    <div>
      <section id="map">
        <Map />
      </section>
      <Footer />
    </div>
  );
}
