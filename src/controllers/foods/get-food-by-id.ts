import { Context } from "hono";
import { foods } from "../../model/foods";

export const getFoodById = (c: Context) => {
  const id = c.req.param("id");

  const food = foods.find((food) => String(food.id) === id);
  c.status(200);
  return c.json({ success: true, food: food });
};
