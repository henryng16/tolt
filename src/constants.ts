import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "The First Breath",
    slug: "the-first-breath",
    price: 185,
    currency: "USD",
    concentration: "Extrait de Parfum",
    scentFamily: ["Woody", "Spicy", "Aromatic"],
    description: "A scent of new beginnings, capturing the crisp air of a mountain peak at dawn.",
    story: "Inspired by the first light that touches the earth, this fragrance is a tribute to the clarity and potential of a new day. It opens with a sharp, cold air accord, followed by the grounding warmth of ancient woods.",
    pyramid: {
      top: [
        { name: "Pink Pepper", description: "A bright, spicy opening with a hint of citrus." },
        { name: "Juniper Berry", description: "Crisp and gin-like, evoking cold mountain air." }
      ],
      heart: [
        { name: "Saffron", description: "Leathery and rich, adding a golden depth." },
        { name: "Clary Sage", description: "Herbal and slightly sweet, like wild mountain herbs." }
      ],
      base: [
        { name: "Sandalwood", description: "Creamy and smooth, providing a long-lasting base." },
        { name: "Vetiver", description: "Earthy and smoky, grounding the fragrance." }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["50ml", "100ml"]
  },
  {
    id: "2",
    name: "Velvet Dusk",
    slug: "velvet-dusk",
    price: 165,
    currency: "USD",
    concentration: "Eau de Parfum",
    scentFamily: ["Floral", "Amber", "Powdery"],
    description: "A sophisticated blend of dark florals and warm amber, perfect for evening wear.",
    story: "As the sun sets, the world transforms. Velvet Dusk captures that transition—the cooling air, the blooming of night-scented flowers, and the lingering warmth of the day's sun on stone.",
    pyramid: {
      top: [
        { name: "Bergamot", description: "A classic citrus start with a bitter edge." },
        { name: "Blackcurrant", description: "Deep, dark berry notes that add a juicy tartness." }
      ],
      heart: [
        { name: "Turkish Rose", description: "Velvety and opulent, the heart of the fragrance." },
        { name: "Iris", description: "Powdery and elegant, adding a sophisticated touch." }
      ],
      base: [
        { name: "Amber", description: "Warm and resinous, like a soft glow." },
        { name: "Patchouli", description: "Earthy and dark, adding mystery and depth." }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["50ml", "100ml"]
  },
  {
    id: "3",
    name: "Solaris",
    slug: "solaris",
    price: 145,
    currency: "USD",
    concentration: "Eau de Parfum",
    scentFamily: ["Citrus", "Marine", "Solar"],
    description: "A bright, energetic scent that evokes the feeling of warm sun on salt-kissed skin.",
    story: "Solaris is a celebration of the sun's energy. It's the scent of a Mediterranean summer—citrus groves, salty sea breezes, and the radiant heat of the afternoon sun.",
    pyramid: {
      top: [
        { name: "Neroli", description: "Sweet and floral citrus, like orange blossoms in the sun." },
        { name: "Sea Salt", description: "A mineral, ozonic note that evokes the ocean." }
      ],
      heart: [
        { name: "Jasmine", description: "Heady and sweet, adding a solar floral quality." },
        { name: "Petitgrain", description: "Green and citrusy, like the leaves of an orange tree." }
      ],
      base: [
        { name: "Musk", description: "Clean and soft, like sun-warmed skin." },
        { name: "Cedarwood", description: "Dry and woody, providing a subtle, clean base." }
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=1000"
    ],
    sizes: ["50ml", "100ml"]
  }
];
