export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  quote: string;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    rating: 5,
    quote: "Peralatannya bersih dan terawat banget. Proses booking juga gampang via WhatsApp. Puas banget sewa di Ruyuk Outdoor!",
    date: "2 minggu lalu"
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    rating: 5,
    quote: "Harga transparan, ga ada biaya tersembunyi. Admin responsif dan helpful. Recommended buat yang mau camping!",
    date: "1 bulan lalu"
  },
  {
    id: "3",
    name: "Andi Wijaya",
    rating: 5,
    quote: "Pertama kali sewa alat outdoor disini langsung jatuh hati. Alatnya lengkap, kondisi bagus, dan harga bersahabat.",
    date: "3 minggu lalu"
  },
  {
    id: "4",
    name: "Dewi Lestari",
    rating: 5,
    quote: "Pelayanan cepat, pengantaran tepat waktu. Sleeping bag-nya hangat dan nyaman. Thanks Ruyuk Outdoor!",
    date: "1 bulan lalu"
  },
  {
    id: "5",
    name: "Rizky Firmansyah",
    rating: 5,
    quote: "Sudah beberapa kali sewa di sini untuk trip bareng komunitas. Selalu puas dengan kualitas alat dan pelayanannya.",
    date: "2 bulan lalu"
  }
];
