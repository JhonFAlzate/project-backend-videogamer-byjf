

import { Router } from 'express';
import { PlayerController } from './controller';
import { UserService } from '../services/user.service';
import { PlayerService } from '../services/player.service';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { InventoryService } from '../services/inventory.service';
import { ResourceService } from '../services/resource.service';
import { ItemService } from '../services/item.service';
import { ConstructionsService } from '../services/constructions.service';


export class PlayerRoutes {
  
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const playerService = new PlayerService(userService);
    const itemService = new ItemService();
    const resourceService = new ResourceService();
    const inventoryService = new InventoryService(itemService, resourceService);
    const playerController = new PlayerController(playerService, inventoryService);


router.use(AuthMiddleware.protect);
    router.post('/', playerController.createPlayer)
    router.get('/:id', playerController.findOnePlayer)
    router.post('/:id/inventory/items', playerController.addItemToInventory)
    router.get('/:id/inventory', playerController.getPlayerInventoryById)
    router.get('/:id/constructions', playerController.getPlayerConstructionsById)

    return router;
  }

}

