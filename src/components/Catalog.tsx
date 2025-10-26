import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { catalogData, categories } from "@/data/catalog";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems = selectedCategory === "Semua"
    ? catalogData
    : catalogData.filter(item => item.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Alat yang Tersedia
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Pilih peralatan berkualitas untuk petualangan Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 md:mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-4 py-2 text-sm sm:text-base transition-smooth ${
                selectedCategory === category
                  ? "bg-yellow-600 text-primary-foreground hover:bg-yellow-500"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden shadow-card hover:shadow-card-hover transition-smooth hover:-translate-y-2 bg-card border-none group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6">
                <Badge className="mb-3 bg-secondary/20 text-foreground hover:bg-secondary/30">
                  {item.category}
                </Badge>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.capacity}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {formatPrice(item.pricePerDay)}
                  </span>
                  <span className="text-sm text-muted-foreground">/hari</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
