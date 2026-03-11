import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const getFoodById = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERT;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  const id = c.req.param("id");

  const food = foods.find((food) => String(food.id) === id);

  c.status(200);
  return c.json({ success: true, food: food });
};
