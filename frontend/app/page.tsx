import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Templates from "@/components/sections/Templates";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, #F0E6D3 0%, #F0E6D3 30%, #0A1628 55%, #0A1628 100%)",
      }}
    >
      <Header />
      <Hero />
      <Services />
      <Templates />
      <Contact />
      <Footer />
    </main>
  );
}
