import { Hono } from "hono";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { addFoods } from "../controllers/foods/add-foods";
import { updateFoodById } from "../controllers/foods/update-food-by-id";
import { deleteFood } from "../controllers/foods/delete-food";

export const registerFoodsRoute = (app: Hono) => {
  app.get("/foods", getFoods);

  app.get("/foods/:id", getFoodById);

  app.post("/foods", addFoods);

  app.put("/foods/:id", updateFoodById);

  app.delete("/foods/:id", deleteFood);
};
