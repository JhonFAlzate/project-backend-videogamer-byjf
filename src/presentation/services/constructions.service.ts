import { Construction } from "../../data";
import { CustomError } from "../../domain";
import { AddConstructionsDto } from "../../domain/dtos/constructions/add-constructions.dto";
import { PlayerService } from "./player.service";



export class ConstructionsService {
    constructor(
        private readonly playerService: PlayerService
    ){}

    async createConstructions(createConstructionsDto: AddConstructionsDto){
        
        const constructions = new Construction();
        const player = await this.playerService.findOnePlayer(createConstructionsDto.playerId)
        
        if(!player) throw CustomError.internalServer('Player not existing')

            console.log(player)
        constructions.name = createConstructionsDto.name.toLocaleLowerCase().trim();
        constructions.type = createConstructionsDto.type.toLocaleLowerCase().trim();
        constructions.location = createConstructionsDto.location.toLocaleLowerCase().trim();
        constructions.player = player;
        
        try {
            return await constructions.save()
            
        } catch (error) {
            throw CustomError.internalServer("Something went wrong...")
        }
    }


}