import axios from "axios";
import { ProductApiData } from "../shared/interface";

export const getProduct = async (id: string): Promise<ProductApiData> => {
  const resp = await axios.get<ProductApiData>(`/api/product/${id}`);
  return resp.data;
};
