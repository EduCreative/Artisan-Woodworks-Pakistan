
import { Product } from '../types';
import { PRODUCTS as INITIAL_PRODUCTS } from '../constants';

const STORAGE_KEY = 'artisan_woodworks_products';

export const ProductService = {
  getProducts: (): Product[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    return JSON.parse(stored);
  },

  getProductById: (id: string): Product | undefined => {
    return ProductService.getProducts().find(p => p.id === id);
  },

  saveProduct: (product: Product) => {
    const products = ProductService.getProducts();
    const index = products.findIndex(p => p.id === product.id);
    
    if (index > -1) {
      products[index] = product;
    } else {
      products.push(product);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    window.dispatchEvent(new Event('productsUpdated'));
  },

  deleteProduct: (id: string) => {
    const products = ProductService.getProducts().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    window.dispatchEvent(new Event('productsUpdated'));
  }
};
