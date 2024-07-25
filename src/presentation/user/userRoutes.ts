import { Router } from "express";
import { UserController } from "./userController";
import { UserService } from "../services/user.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userController = new UserController(userService);

    router.post("/register", userController.registerUser);
    router.post("/login", userController.login);

    router.use(AuthMiddleware.protect);

    router.get("/:id", userController.findOneUser);

    return router;
  }
}
