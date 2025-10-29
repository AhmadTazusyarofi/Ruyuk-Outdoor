// src/data/catalog.ts

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  capacity: string;
  pricePerDay: number;
  image: string;
}

export const catalogData: CatalogItem[] = [
  // --- Tenda ---
  {
    id: "tenda-single-layer",
    name: "Tenda Single Layer Kap 2",
    category: "Tenda",
    capacity: "2 Orang",
    pricePerDay: 35000,
    image:
      "https://plus.unsplash.com/premium_photo-1664392108686-8c7c590d1b0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVuZGElMjBkb21lJTIwa2FwYXNpdGFzJTIwMnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: "tenda-single-layer-4",
    name: "Tenda Single Layer Kap 4",
    category: "Tenda",
    capacity: "4 Orang",
    pricePerDay: 40000,
    image:
      "https://plus.unsplash.com/premium_photo-1664392108686-8c7c590d1b0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVuZGElMjBkb21lJTIwa2FwYXNpdGFzJTIwMnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: "tenda-double-layer",
    name: "Tenda Double Layer Kap 2",
    category: "Tenda",
    capacity: "2 Orang",
    pricePerDay: 40000,
    image:
      "https://media.istockphoto.com/id/2090362777/id/foto/camping.webp?a=1&b=1&s=612x612&w=0&k=20&c=cccgFAaW3fW3krYXmNZ_1f0Md--V9pg84BLvvFD2Wcc=",
  },
  {
    id: "tenda-double-layer-4",
    name: "Tenda Double Layer Kap 4",
    category: "Tenda",
    capacity: "4 Orang",
    pricePerDay: 50000,
    image:
      "https://media.istockphoto.com/id/2090362777/id/foto/camping.webp?a=1&b=1&s=612x612&w=0&k=20&c=cccgFAaW3fW3krYXmNZ_1f0Md--V9pg84BLvvFD2Wcc=",
  },
  {
    id: "tenda-double-layer-5",
    name: "Tenda Double Layer Kap 5",
    category: "Tenda",
    capacity: "5 Orang",
    pricePerDay: 60000,
    image:
      "https://media.istockphoto.com/id/2090362777/id/foto/camping.webp?a=1&b=1&s=612x612&w=0&k=20&c=cccgFAaW3fW3krYXmNZ_1f0Md--V9pg84BLvvFD2Wcc=",
  },
  {
    id: "flysheet",
    name: "Flysheet",
    category: "Lainnya",
    capacity: "1 Set",
    pricePerDay: 15000,
    image:
      "https://media.istockphoto.com/id/2166400475/id/foto/tenda-diselimuti-kabut-tebal-pria-berjaket-berkerudung-dikelilingi-oleh-pepohonan-tinggi-yang.jpg?s=612x612&w=0&k=20&c=p7G9kxU_DTwoNx4xNpwxGfPe-iuYIjI4vUKd1XATAfs=",
  },

  // --- Sleeping ---
  {
    id: "sleeping-bag",
    name: "Sleeping Bag",
    category: "Sleeping",
    capacity: "1 Orang",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/1166422996/id/foto/kantong-tidur-terisolasi.jpg?s=612x612&w=0&k=20&c=AE3xYUVHnnZfB0QnWTOAdnewTVHx1ihaqKO7NNovl1U=",
  },
  {
    id: "matras",
    name: "Matras",
    category: "Sleeping",
    capacity: "1 Orang",
    pricePerDay: 5000,
    image:
      "data:image/jpeg;base64,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",
  },
    {
    id: "hammock",
    name: "Hammock",
    category: "Sleeping",
    capacity: "1 Unit",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/1436912129/id/foto/bidikan-fokus-selektif-dari-orang-orang-yang-tidur-di-tempat-tidur-gantung-yang-terjalin.jpg?s=612x612&w=0&k=20&c=OReTMLwddkB3XD8eQaloKdCx1O566a4xbATKSwhVFj0=",
  },

  // --- Cooking ---
  {
    id: "kompor-portable",
    name: "Kompor Portable",
    category: "Cooking",
    capacity: "1 Set",
    pricePerDay: 15000,
    image:
      "https://media.istockphoto.com/id/497509673/id/foto/kompor-gas-terisolasi-di-atas-putih.jpg?s=612x612&w=0&k=20&c=c13SFryedyaeeokwOcnCF8O-36zojOeoy-Q_tZI4owc=",
  },
  {
    id: "kompor-kavartable",
    name: "Kompor Kavartable",
    category: "Cooking",
    capacity: "1 Set",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/2204916438/id/foto/outdoor-kettle-boiling-water-on-portable-stove-in-a-serene-forest-setting-during-a-sunny-day.jpg?s=612x612&w=0&k=20&c=zMxBjmrrTNVWqYhwErNPk-0iFzBK6O-yo8FooTj24cg=",
  },
  {
    id: "nesting-cookset",
    name: "Nesting/Cookset",
    category: "Cooking",
    capacity: "1 Set",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/2167544785/id/foto/camping-aluminum-cookware-set-for-cooking-on-a-campfire.jpg?s=612x612&w=0&k=20&c=AxyRQfOxVNrC3QH78PpltPworsuUi6r55DneI28ih-0=",
  },
  {
    id: "gas-portable",
    name: "Gas Portable",
    category: "Cooking",
    capacity: "1 Set",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/467054164/id/foto/kartrid-gas-butane.jpg?s=612x612&w=0&k=20&c=PKtACySyluJ6V6aHdTZZ-iGfHUc1xqq3JzZgc5uNgxw=",
  },
    {
    id: "grill-pan",
    name: "Grill Pan",
    category: "Cooking",
    capacity: "1 Set",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/901092660/id/foto/panci-panggangan-persegi.jpg?s=612x612&w=0&k=20&c=jxBiCu6uu7AEOyiU-ytOqiP70Mj62fuS-Za1iQf-FXQ=",
  },

  // --- Lighting ---
  {
    id: "headlamp",
    name: "Headlamp",
    category: "Lighting",
    capacity: "1 Unit",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/1134503663/id/foto/headlamp-terisolasi.webp?a=1&b=1&s=612x612&w=0&k=20&c=yBJqYR-yvXBaeaRW3hmQ10IOgBgEz63_Vb-dW6AJoEo=",
  },
  {
    id: "lampu-tenda",
    name: "Lampu Tenda",
    category: "Lighting",
    capacity: "1 Set",
    pricePerDay: 10000,
    image:
      "data:image/jpeg;base64,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",
  },

  // --- Lainnya ---
    {
    id: "carrier",
    name: "Carrier",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 35000,
    image:
      "https://media.istockphoto.com/id/161952203/id/foto/ransel-hiking.jpg?s=612x612&w=0&k=20&c=leoQ2tlGzlgMO8E8I2BrIS739XNoXhHfdsqiWs8OBZk=",
  },
  {
    id: "daypack",
    name: "Daypack",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 25000,
    image:
      "https://media.istockphoto.com/id/2163358943/id/foto/close-up-ransel-hiking-biru-tergeletak-di-tanah-di-hutan-ransel-memiliki-botol-air-plastik.jpg?s=612x612&w=0&k=20&c=SaTMGiAm7DZVQnT0iPSobwnLgU8WLJx_7qnFbjz6giQ=",
  },
    {
    id: "hydropack",
    name: "Hydropack",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 25000,
    image:
      "https://media.istockphoto.com/id/1305716708/id/foto/pejalan-kaki-wanita-muda-dengan-ransel-bepergian-ke-luar-ruangan-di-pegunungan.jpg?s=612x612&w=0&k=20&c=8AHfjqlLvOsvb_W_mDHm3aFm1J_TQlr1nSP0UVH9RQQ=",
  },
    {
    id: "sepatu",
    name: "Sepatu Hiking",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 35000,
    image:
      "https://media.istockphoto.com/id/134406993/id/foto/sepatu-bot-hiking.jpg?s=612x612&w=0&k=20&c=EH37Pdkb0NrYiit9bynPquMJM_OeEDg6NhqpwskE0QM=",
  },
    {
    id: "kursi-lipat",
    name: "Kursi Lipat",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/2231356083/id/foto/kursi-berkemah-lipat-terisolasi-dalam-kanvas-hijau-zaitun.jpg?s=612x612&w=0&k=20&c=fD2yBqqK6JXkcnGUQKNRhhnlCsWgDE7gBB4nnnqPqR8=",
  },
      {
    id: "meja-lipat",
    name: "Meja Lipat",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 12000,
    image:
      "https://media.istockphoto.com/id/1400497345/id/foto/meja-berkemah-dengan-secangkir-kopi-dan-ransel-di-luar-ruangan.jpg?s=612x612&w=0&k=20&c=FfxGQzBGfDONHOcOPmObOXETgys8xKMfypQTAzgcFf4=",
  },
  {
    id: "trekking-pole",
    name: "Trekking Pole",
    category: "Lainnya",
    capacity: "1 Unit",
    pricePerDay: 10000,
    image:
      "https://media.istockphoto.com/id/1257099310/id/foto/tiang-hiking-yang-indah.jpg?s=612x612&w=0&k=20&c=SAjeBIZxEFwj-eg8A9cusZpRUO_8Mrf-KApJlQg66IM=",
  },
  {
    id: "jas-hujan",
    name: "Jas Hujan",
    category: "Lainnya",
    capacity: "1 Set",
    pricePerDay: 15000,
    image:
      "https://media.istockphoto.com/id/152982934/id/foto/hujan-biru-ponco-menggantung.jpg?s=612x612&w=0&k=20&c=iG7R1km7tHL2BkqeBEevvTpJ88PYNXX3IS22dWF9_Dk=",
  },
];

// daftar kategori yang dipakai untuk filter
export const categories = [
  "Semua",
  "Tenda",
  "Sleeping",
  "Cooking",
  "Lighting",
  "Lainnya",
];
