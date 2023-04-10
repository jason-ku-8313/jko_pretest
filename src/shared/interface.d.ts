export interface ProductApiData {
  id: string;
  originalPrice: string[];
  sellingPrice: string[];
  discounts: string[];
  orderingInfos: string[];
  specCategories: string[][];
  specLabels: string[][];
  specs: ProductSpec[];
}

export interface ProductSpec {
  id: string;
  title: string;
  price: string;
  stock: number;
  images: string[];
  extraInfos: ProductExtraInfo[];
  labels: string[];
}

export interface ProductExtraInfo {
  type: string;
  text: string;
}

export interface ShoppingCart {
  items: CartItem[];
}

export interface CartItem {
  productId: string;
  specId: string;
  quantity: number;
}
