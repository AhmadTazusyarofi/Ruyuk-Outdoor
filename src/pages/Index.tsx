import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import ContactBooking from "@/components/ContactBooking";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Gallery />
      <Testimonials />
      <ContactBooking />
      <Footer />
    </div>
  );
};

export default Index;
