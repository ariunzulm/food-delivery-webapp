import { Context } from "hono";
import { foods } from "../../model/foods";

export const updateFoodById = async (c: Context) => {
  const id = c.req.param("id");

  const { name, category } = await c.req.json();
  const updatedFoods = foods.map((food) => {
    if (String(food.id) === id) {
      const updatedFood = {
        ...foods,
        name,
        category,
      };
      return updatedFood;
    } else {
      return food;
    }
  });

  c.status(200);
  return c.json({ success: true, foods: updatedFoods });
};
