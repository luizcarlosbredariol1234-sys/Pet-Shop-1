export interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  badge?: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar: string;
  rating: number;
}
