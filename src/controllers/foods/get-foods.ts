import { Context } from "hono";
import { foods } from "../../model/foods";

export const getFoods = (c: Context) => {
  c.status(200);
  return c.json({ success: true, foods: foods });
};
