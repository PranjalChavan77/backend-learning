import { Router } from "express";
import ProductSchema from "../models/product.schema.js";

const OperatorRouter = Router();

OperatorRouter.get("/", async (req, res) => {
  try {
    // const products = await ProductSchema.find({ price: { $eq: 75000 } });
    // res.json({ products });
    // const products = await ProductSchema.find({ price: { $ne: 75000 } });
    // res.json({ products });
    // const productsIN = await ProductSchema.find({ price: { $in: [75000, 1500] } });
    // const productsNIN = await ProductSchema.find({ price: { $nin: [75000, 1500] } });
    // res.json({ productsIN, productsNIN });

    // const productsAND = await ProductSchema.find({
    //   $and: [{ price: 75000 }, { stock: 30 }],
    // });

    // const productsOR = await ProductSchema.find({
    //  $or: [{ price: 75000 }, { stock: 10 }],
    // });

    // const productsNOT = await ProductSchema.find({
    //  price: { $not: { $gt: 75000 } },
    // });

    // res.json({ productsAND, productsOR, productsNOT});

    const productsNOR = await ProductSchema.find({
      $nor: [{ price: 75000 }, { stock: 10 }],
    });
    res.json({  productsNOR });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

OperatorRouter.get("/matching-grouping", async (req, res) => {
  try {
    const products = await ProductSchema.aggregate([
      {
        $match: {
          category: "Accessories",
          stock: { $gt: 15 },
          price: { $gt: 2000 },
        },
      },
      {
        $group: {
          _id: "$category",
          totalStock: { $sum: "$stock" },
          totalPrice: { $sum: { $multiply: ["$stock", "$price"] } },
        },
      },
    ]);
    res.send(products);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

export default OperatorRouter;