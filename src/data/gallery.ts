// src/data/gallery.ts
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g9 from "@/assets/gallery/g9.jpg";

export type GalleryItem = {
  src: string;
  alt?: string;
  w?: number;
  h?: number;
};

export const galleryItems: GalleryItem[] = [
  { src: g1, alt: "Camping Ceria" },
  { src: g2, alt: "Camp ground - setup tenda" },
  { src: g3, alt: "Tenda - Ruyuk Outdoor" },
  { src: g4, alt: "Tenda - Ruyuk Outdoor" },
  { src: g5, alt: "Ruyuk Outdoor Store" },
  { src: g6, alt: "Ruyuk Outdoor" },
  { src: g7, alt: "Ruyuk Outdoor - Event Camping " },
  { src: g8, alt: "Ruyuk Outdoor - jalur hutan" },
  { src: g9, alt: "Event Camping" },
];
