import  express from "express";
import { createProduct, deleteProduct, getFlashDeals, getProduct, getProducts, updateProduct } from "../Controllers/productController";
import auth from "../middleware/auth.js";
import admin  from "../middleware/admin.js";

const produceRouter = express.Router();

produceRouter.get("/flash-deals", getFlashDeals);
produceRouter.get ("/", getProducts);
produceRouter.get("/:id", getProduct);
produceRouter.post("/", auth , admin ,createProduct);
produceRouter.put("/:id", auth , admin ,updateProduct);
produceRouter.delete("/:id", auth , admin , deleteProduct);

export default produceRouter;