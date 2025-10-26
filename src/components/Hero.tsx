import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";
import BookingModal from "@/components/BookingModal";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* ===== FIXED BACKGROUND (DIAM SAAT SCROLL) ===== */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Gelapin supaya teks kebaca */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Gradasi bawah biar transisi ke section berikut halus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      </div>

      {/* ===== CONTENT (INI YANG SCROLL) ===== */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* <Badge className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
            <MapPin className="w-4 h-4 mr-2" />
            Buka setiap hari • Kuningan & sekitarnya
          </Badge> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight">
            Sewa Peralatan Outdoor
            <br />
            <span className="text-yellow-600">Mudah &amp; Terjangkau</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto">
            Lengkap. Bersih. Siap Diajak Naik.
            Fokus pada kebersihan, kelayakan pakai, dan kemudahan proses sewa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingModal
              trigger={
                <Button
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-500 text-white shadow-xl w-full sm:w-auto group"
                >
                  Booking Sekarang
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("catalog")}
              className="bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm shadow-xl w-full sm:w-auto"
            >
              Lihat Katalog Alat
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
