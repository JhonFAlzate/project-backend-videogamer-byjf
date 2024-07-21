import { Router } from "express";
import { PlayerRoutes } from "./player/route";
import { UserRoutes } from "./user/userRoutes";
import { InventoryRoutes } from "./inventory/controller";
import { ResourcesRouter } from "./resources/route";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/v1/player", PlayerRoutes.routes);
    router.use("/api/v1/user", UserRoutes.routes);
    router.use("/api/v1/inventory", InventoryRoutes.routes)
    router.use("/api/v1/", ResourcesRouter.routes)

    return router;
  }
}
