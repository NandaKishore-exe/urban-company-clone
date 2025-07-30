export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  id: string;
  service: Service;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  location: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: Date;
}

export interface Location {
  address: string;
  latitude?: number;
  longitude?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
} 