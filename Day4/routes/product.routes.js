import { Router } from "express";
import ProductSchema from "../models/product.schema.js";

const ProductRouter = Router();
ProductRouter.get("/add-product", async (req, res) => {
    try { 
        const products = [
  {
    "name": "Laptop",
    "price": 75000,
    "description": "High-performance laptop",
    "category": "Electronics",
    "stock": 12
  },
  {
    "name": "Smartphone",
    "price": 25000,
    "description": "Android smartphone",
    "category": "Electronics",
    "stock": 30
  },
  {
    "name": "Headphones",
    "price": 1500,
    "description": "Noise cancelling headphones",
    "category": "Accessories",
    "stock": 50
  },
  {
    "name": "Bluetooth Speaker",
    "price": 1800,
    "description": "Portable speaker",
    "category": "Accessories",
    "stock": 20
  },
  {
    "name": "Keyboard",
    "price": 700,
    "description": "Mechanical keyboard",
    "category": "Computer",
    "stock": 25
  },
  {
    "name": "Mouse",
    "price": 500,
    "description": "Wireless mouse",
    "category": "Computer",
    "stock": 40
  },
  {
    "name": "Monitor",
    "price": 12000,
    "description": "24-inch LED monitor",
    "category": "Electronics",
    "stock": 10
  },
  {
    "name": "Smartwatch",
    "price": 5000,
    "description": "Fitness smartwatch",
    "category": "Wearables",
    "stock": 15
  },
  {
    "name": "Shoes",
    "price": 1200,
    "description": "Running shoes",
    "category": "Fashion",
    "stock": 22
  },
  {
    "name": "Backpack",
    "price": 800,
    "description": "Waterproof backpack",
    "category": "Fashion",
    "stock": 18
  },
  {
    "name": "Coffee Maker",
    "price": 2500,
    "description": "Automatic coffee machine",
    "category": "Home Appliances",
    "stock": 8
  },
  {
    "name": "Microwave Oven",
    "price": 7500,
    "description": "Convection oven",
    "category": "Home Appliances",
    "stock": 6
  },
  {
    "name": "Fan",
    "price": 1500,
    "description": "Electric fan",
    "category": "Home Appliances",
    "stock": 30
  },
  {
    "name": "T-Shirt",
    "price": 400,
    "description": "Cotton t-shirt",
    "category": "Fashion",
    "stock": 50
  },
  {
    "name": "Jeans",
    "price": 1000,
    "description": "Blue denim jeans",
    "category": "Fashion",
    "stock": 35
  },
  {
    "name": "Book",
    "price": 300,
    "description": "Fiction novel",
    "category": "Books",
    "stock": 100
  },
  {
    "name": "Water Bottle",
    "price": 200,
    "description": "Steel bottle",
    "category": "Accessories",
    "stock": 45
  },
  {
    "name": "Table Lamp",
    "price": 700,
    "description": "LED study lamp",
    "category": "Home Decor",
    "stock": 15
  },
  {
    "name": "Charger",
    "price": 350,
    "description": "Fast Type-C charger",
    "category": "Electronics",
    "stock": 40
  },
  {
    "name": "HDMI Cable",
    "price": 250,
    "description": "High-speed HDMI cable",
    "category": "Electronics",
    "stock": 60
  }
];
    await ProductSchema.insertMany(products);

    res.status(201).json({
        success: true,
        message: "20 products inserted successfully"
    });
    } catch (error) {
        res.status(500).json({ 
        success: false,
        message: error.message,
    });
    }
});

ProductRouter.get("/advance-queries", async (req, res) => {
    try {
        // const products = await ProductSchema.find({}).sort({ price: 1 });
        // const products = await ProductSchema.find({}).sort({ price: -1 });

        // const products = await ProductSchema.find({}).limit( 2 );
        // const products = await ProductSchema.find({}).sort({ price: -1 }).limit( 2 );

        // const pageNumber = 5;
        // const products = await ProductSchema.find({})
        // .skip((pageNumber - 1 ) * 5)
        // .limit(5);

        // const products = await ProductSchema.find({
        //     price: { $gt: 5000},
        // });

        // const products = await ProductSchema.find({}, "name price stock ");

        const { searchedProduct } = req.body;

        const products = await ProductSchema.find({
            name: { $regex: searchedProduct, $options: "i"},
        });
        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

export default ProductRouter;