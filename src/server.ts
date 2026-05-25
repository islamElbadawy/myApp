// src/index.ts
import express from "express";
import type { Request, Response } from "express";
import { fakeProducts } from "./utils/fakeData.ts";

const app = express();
const PORT = 5000;
const products = fakeProducts()

app.get("/products", (req: Request, res: Response) => {
  res.send(products);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const productId = +req.params.id;
  if (isNaN(productId)) {
    res.status(404).send({message: "Invalid product id"});
  }
  res.send(products.find(p => p.productId === productId));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
