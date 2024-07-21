import { Router } from "express";
// import { Construction } from "../../data";
import { ConstructionsController } from "./controller";
import { ConstructionsService } from "../services/constructions.service";
import { PlayerService } from "../services/player.service";
import { UserService } from "../services/user.service";



export class ConstructionsRoutes {

    static get routes(): Router {
        const router = Router();

        const userService = new UserService()
        const playerService = new PlayerService(userService)
        const constructionsService = new ConstructionsService(playerService);
        const constructionsController = new ConstructionsController(constructionsService);

        router.post('/', constructionsController.createConstructions)

    return router
    }

}