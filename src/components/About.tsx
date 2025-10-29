import { Card } from "@/components/ui/card";
import Logo from "@/assets/logo.png";
import { DollarSign, Sparkles, Calendar, Headphones } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Harga Transparan",
      description:
        "Tanpa biaya tersembunyi. Semua harga sudah tertera jelas per item per hari.",
    },
    {
      icon: Sparkles,
      title: "Kebersihan Terjaga",
      description:
        "Setiap alat dicuci dan diinspeksi sebelum disewakan. Higienis dan layak pakai.",
    },
    {
      icon: Calendar,
      title: "Fleksibel",
      description:
        "Sewa harian, mingguan, atau bulanan. Pickup atau delivery tersedia.",
    },
    {
      icon: Headphones,
      title: "Support Trip",
      description:
        "Konsultasi gratis untuk kebutuhan alat sesuai destinasi dan durasi perjalanan.",
    },
  ];

  const stats = [
    { number: "500+", label: "Penyewaan" },
    { number: "4.9/5", label: "Rating" },
    { number: "50+", label: "Item Tersedia" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid — lebih naik & tambah jarak bawah */}
        <div className="relative z-20 -translate-y-24 md:-translate-y-32 lg:-translate-y-44 mb-6 md:mb-6 lg:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-2 bg-card border-none"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tentang Kami – Centered Hero */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 mt-[-3rem] md:mt-[-4rem] lg:mt-[-6rem]">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <img
                src={Logo}
                alt="Logo Ruyuk Outdoor"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain rounded-full bg-white p-3 shadow-xl ring-2 ring-yellow-500/40"
              />
              {/* halo */}
              <div className="absolute inset-0 rounded-full blur-2xl bg-yellow-500/20 -z-10" />
            </div>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-foreground">
            Tentang Kami
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ruyuk Outdoor menyediakan penyewaan peralatan camping, hiking, dan
            kegiatan alam. Fokus kami pada kebersihan, kelayakan pakai, dan
            kemudahan proses sewa—agar kamu fokus pada perjalanannya.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 md:mt-8 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
