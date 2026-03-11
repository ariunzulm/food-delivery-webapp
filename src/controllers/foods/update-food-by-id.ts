import { eq } from "drizzle-orm";
import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const updateFoodById = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERT;
  const db = getDrizzleDb(d1);

  const id = c.req.param("id");

  const { name, ingredients } = await c.req.json();

  const result = await db
    .update(foodsTable)
    .set({ name, ingredients })
    .where(eq(foodsTable.id, Number(id)))
    .returning();

  return c.json({ result });
};
