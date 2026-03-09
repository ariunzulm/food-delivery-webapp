import { Hono } from "hono";
import { registerFoodsRoute } from "./routes/foods.routes";

const app = new Hono();

registerFoodsRoute(app);

export default app;
