
export type Category = 'Saree' | 'Kurta' | 'Lehenga' | 'Menswear' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
