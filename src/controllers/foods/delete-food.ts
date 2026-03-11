import { eq } from "drizzle-orm";
import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const deleteFood = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERT;
  const db = getDrizzleDb(d1);

  const id = c.req.param("id");

  if (!id) return c.json({ message: "not found" });

  await db.delete(foodsTable).where(eq(foodsTable.id, Number(id)));

  return c.json({ success: true });
};
