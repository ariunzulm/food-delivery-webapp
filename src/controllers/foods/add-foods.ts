import { Context } from "hono";
import { foods } from "../../model/foods";

export const addFoods = async (c: Context) => {
  const { name, category } = await c.req.json();
  const newFood = {
    id: foods.length + 1,
    name,
    category,
  };
  foods.push(newFood);

  c.status(200);
  return c.json({ success: true, foods: foods });
};
