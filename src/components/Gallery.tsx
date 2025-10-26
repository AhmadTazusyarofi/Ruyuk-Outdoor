// src/components/Gallery.tsx
import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { galleryItems } from "../data/gallery";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  }, []);
  const next = useCallback(() => {
    setIdx((i) => (i + 1) % galleryItems.length);
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
            Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Dokumentasi kegiatan event dan perlengkapan Ruyuk Outdoor.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="mb-4 w-full overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-smooth group"
              aria-label={`Lihat foto: ${item.alt ?? `gambar ${i + 1}`}`}
            >
              <img
                src={item.src}
                alt={item.alt ?? "Gallery item"}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>

        {/* Lightbox (tanpa tombol X) */}
        <Dialog open={open} onOpenChange={setOpen}>
          {/* Klik overlay untuk tutup; ESC juga berfungsi */}
          <DialogOverlay className="bg-black/30 backdrop-blur-sm" />

          <DialogContent
            className="
              max-w-5xl w-[92vw] p-0 overflow-hidden
              bg-transparent border-0 shadow-none
              [&>button[aria-label='Close']]:hidden  /* sembunyikan close bawaan */
            "
          >
            <div className="relative">
              <img
                src={galleryItems[idx].src}
                alt={galleryItems[idx].alt ?? "Foto gallery"}
                className="w-full h-full object-contain max-h-[80vh] rounded-2xl"
              />

              {/* Prev / Next */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={prev}
                  className="bg-white/80 hover:bg-white"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={next}
                  className="bg-white/80 hover:bg-white"
                  aria-label="Berikutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
