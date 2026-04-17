import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import StickyCallBar from "./components/StickyCallBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <Visit />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
