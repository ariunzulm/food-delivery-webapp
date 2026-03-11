import { Hono } from "hono";
import { registerFoodsRoute } from "./routes";
import { Bindings } from "./types";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.text("Please test me!"));

registerFoodsRoute(app);

export default {
  fetch: app.fetch,
};
