export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  priceFrom: string;
  features: string[];
  image?: string;
  badge?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'racao' | 'petiscos' | 'brinquedos' | 'farmacia' | 'higiene';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  weightOrVolume?: string;
  description: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  image: string;
  highlight?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  tutorName: string;
  petName: string;
  petBreed: string;
  avatar: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  petName: string;
  breed: string;
  category: 'banho' | 'tosa' | 'spa' | 'felinos';
  image: string;
  description: string;
}
