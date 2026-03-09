import { Context } from "hono";
import { foods } from "../../model/foods";

export const deleteFood = (c: Context) => {
  const id = c.req.param("id");

  const fileteredFood = foods.filter((food) => String(food.id) !== String(id));
  

  console.log(fileteredFood, "filter");

  c.status(200);
  return c.json({ success: true, foods: fileteredFood });
};
