import { createContext } from "react";
import { ShoppingCart } from "../shared/interface";

export default createContext<ShoppingCart>({ items: [] });
