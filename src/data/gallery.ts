// src/data/gallery.ts
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";

export type GalleryItem = {
  src: string;
  alt?: string;
  w?: number;
  h?: number;
};

export const galleryItems: GalleryItem[] = [
  { src: g1, alt: "Pendakian - sunrise di puncak" },
  { src: g2, alt: "Camp ground - setup tenda" },
  { src: g3, alt: "Cooking set - kompor portable" },
  { src: g4, alt: "Sleeping bag & matras" },
  { src: g5, alt: "Carrier 60L - siap jalan" },
  { src: g6, alt: "Trekking pole - jalur hutan" },
];
