
export enum Category {
  LivingRoom = 'Living Room',
  Bedroom = 'Bedroom',
  Office = 'Office',
  Dining = 'Dining',
  Custom = 'Custom Furniture'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  priceStart: number;
  materials: string[];
  dimensions: {
    l: number;
    w: number;
    h: number;
    unit: string;
  };
  deliveryWeeks: number;
  images: string[];
  videoUrl?: string;
}

export interface CustomInquiry {
  id: string;
  type: string;
  size: string;
  color: string;
  material: string;
  budgetRange: string;
  referenceImage?: string;
  timestamp: number;
}
