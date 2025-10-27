import {
  Instagram,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Home,
  Info,
  Package,
  Star,
  Phone,
} from "lucide-react";
import Logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // Nomor WA versi link (tanpa 0, pakai 62)
  const waDisplay = "083120451990";
  const waNumber = "6283120451990";

  return (
    <footer className="bg-muted/ border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-xl font-bold text-white mb-4">
              <img
                src={Logo}
                alt="Logo Ruyuk Outdoor"
                className="w-9 h-9 md:w-10 md:h-10 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span>Ruyuk Outdoor</span>
            </div>

            <p className="text-white mb-4 max-w-md">
              Rental alat outdoor dan camping terpercaya di Kuningan. Lengkap,
              bersih, dan siap diajak naik.
            </p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/ruyukoutdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@ruyukoutdoor.com"
                className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-primary-foreground transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {[
                { label: "Beranda", id: "hero", Icon: Home },
                { label: "Tentang", id: "about", Icon: Info },
                { label: "Alat", id: "catalog", Icon: Package },
                { label: "Testimoni", id: "testimonials", Icon: Star },
                { label: "Kontak", id: "contact", Icon: Phone },
              ].map(({ label, id, Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="group inline-flex items-center gap-2 text-white hover:text-yellow-600 transition-smooth"
                  >
                    <Icon className="w-4 h-4 opacity-90 group-hover:opacity-100" />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Informasi</h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-white" />
                <span>
                  Jl. Kojengkang Desa Geresik.
                  <br />
                  Ciawigebang, Kuningan.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white" />
                <span>Senin - Minggu: 09.00 - 20.00</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-white" />
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition-smooth"
                  aria-label="WhatsApp Ruyuk Outdoor"
                >
                  WA: {waDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-white">
          <p>&copy; {currentYear} Ruyuk Outdoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
