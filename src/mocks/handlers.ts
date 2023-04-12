import { rest } from "msw";
import { products } from "./data";

export const handlers = [
  rest.get("/api/product/:id", (req, res, ctx) => {
    const product = products.find(({ id }) => id === req.params["id"]);
    if (!product) {
      return res(ctx.status(500), ctx.json({ message: "Product Not Found." }));
    }
    return res(ctx.status(200), ctx.json(product));
  }),
];
