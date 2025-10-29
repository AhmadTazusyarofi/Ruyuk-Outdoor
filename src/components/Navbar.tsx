import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Info,
  Package,
  Images,
  Star,
  Phone,
} from "lucide-react";
import BookingModal from "@/components/BookingModal";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // menu + ikon
  const menuItems = [
    { label: "Beranda", id: "hero", Icon: Home },
    { label: "Tentang Kami", id: "about", Icon: Info },
    { label: "Alat", id: "catalog", Icon: Package },
    { label: "Gallery", id: "gallery", Icon: Images },
    { label: "Testimoni", id: "testimonials", Icon: Star },
    { label: "Kontak", id: "contact", Icon: Phone },
  ] as const;

  // === Kelas dinamis ===
  const navBg = isScrolled
    ? "bg-background/95 backdrop-blur-md shadow-md"
    : "bg-transparent";

  // Brand: putih saat di atas, jadi foreground saat scroll
  const brandClass = isScrolled ? "text-black" : "text-white";

  // Link menu: putih saat di atas, jadi foreground/80 saat scroll
  const linkClass = isScrolled
    ? "text-black hover:text-yellow-600"
    : "text-white hover:text-yellow-400";

  // Warna ikon menu mobile juga mengikuti state
  const iconColor = isScrolled ? "text-foreground" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${navBg}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + teks */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 transition-smooth hover:scale-105"
            aria-label="Ke Beranda"
          >
            <img
              src={Logo}
              alt="Logo Ruyuk Outdoor"
              className="w-12 h-12 md:w-12 md:h-12 object-contain"
              loading="eager"
              decoding="async"
            />
            <span className={`text-xl md:text-xl font-bold ${brandClass}`}>
              Ruyuk Outdoor
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`
                  group inline-flex items-center gap-2 font-medium transition-smooth
                  relative ${linkClass}
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:bg-yellow-600 after:scale-x-0 after:origin-right after:transition-transform
                  hover:after:scale-x-100 hover:after:origin-left
                `}
              >
                <Icon className="w-4 h-4 opacity-90 group-hover:opacity-100" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${iconColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {menuItems.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left ${linkClass} font-medium transition-smooth py-2 flex items-center gap-2`}
                >
                  <Icon className="w-4 h-4 opacity-90" />
                  <span>{label}</span>
                </button>
              ))}
              {/* <BookingModal
                trigger={<Button size="sm" className="w-full">Booking Sekarang</Button>}
              /> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
