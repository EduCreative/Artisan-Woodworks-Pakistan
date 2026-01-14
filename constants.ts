
import { Category, Product } from './types';

export const BUSINESS_NAME = "Artisan Woodworks";
export const WHATSAPP_NUMBER = "+923001234567"; // Placeholder for Pakistani workshop
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Sheesham Sofa Set',
    category: Category.LivingRoom,
    description: 'Hand-carved premium Sheesham wood sofa set with high-density foam and luxury fabric.',
    priceStart: 145000,
    materials: ['Sheesham Wood', 'Velvet Fabric', 'High-Density Foam'],
    dimensions: { l: 84, w: 32, h: 36, unit: 'inches' },
    deliveryWeeks: 4,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    name: 'Modern Minimalist Bed Frame',
    category: Category.Bedroom,
    description: 'Sleek, modern bed frame made from solid oak with integrated bedside drawers.',
    priceStart: 85000,
    materials: ['Solid Oak', 'Steel Accents'],
    dimensions: { l: 78, w: 72, h: 42, unit: 'inches' },
    deliveryWeeks: 3,
    images: [
      'https://images.unsplash.com/photo-1505693419148-412808f3f01c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '3',
    name: 'Executive Walnut Desk',
    category: Category.Office,
    description: 'Solid walnut desk with live edge and cable management. Perfect for small offices.',
    priceStart: 45000,
    materials: ['Walnut Wood', 'Powder-coated Iron'],
    dimensions: { l: 60, w: 30, h: 30, unit: 'inches' },
    deliveryWeeks: 2,
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '4',
    name: 'Mahogany Dining Table (6 Seater)',
    category: Category.Dining,
    description: 'Traditional mahogany dining table with detailed polish and sturdy build.',
    priceStart: 110000,
    materials: ['Mahogany Wood', 'Tempered Glass Top'],
    dimensions: { l: 72, w: 36, h: 30, unit: 'inches' },
    deliveryWeeks: 5,
    images: [
      'https://images.unsplash.com/photo-1530018607912-eff2df114f11?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '5',
    name: 'Scandinavian Coffee Table',
    category: Category.LivingRoom,
    description: 'Lightweight and stylish coffee table made from Ash wood.',
    priceStart: 12000,
    materials: ['Ash Wood', 'Matte Finish'],
    dimensions: { l: 36, w: 24, h: 18, unit: 'inches' },
    deliveryWeeks: 1,
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
