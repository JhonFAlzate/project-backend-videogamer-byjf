import { Router } from "express";
import { PlayerRoutes } from "./player/route";
import { UserRoutes } from "./user/userRoutes";
import { InventoryRoutes } from "./inventory/controller";
import { ResourcesRouter } from "./resources/route";
import { ConstructionsRoutes } from "./constructions/route";
import { ClanRoutes } from "./clan/route";
import { QuestRoutes } from "./quest/routes";
import { AuthMiddleware } from "./middlewares/auth.middleware";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/v1/user", UserRoutes.routes);
    
    router.use(AuthMiddleware.protect);

    router.use("/api/v1/player", PlayerRoutes.routes);
    router.use("/api/v1/inventory", InventoryRoutes.routes);
    router.use("/api/v1/resources", ResourcesRouter.routes);
    router.use("/api/v1/constructions", ConstructionsRoutes.routes);
    router.use("/api/v1/clan", ClanRoutes.routes);
    router.use("/api/v1/quest", QuestRoutes.routes);

    return router;
  }
}
