export interface ScentNote {
  name: string;
  description: string;
}

export interface ScentPyramid {
  top: ScentNote[];
  heart: ScentNote[];
  base: ScentNote[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  concentration: 'Extrait de Parfum' | 'Eau de Parfum' | 'Eau de Toilette';
  scentFamily: string[];
  description: string;
  story: string;
  pyramid: ScentPyramid;
  images: string[];
  sizes: string[]; // e.g., ["50ml", "100ml"]
}

export interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}
