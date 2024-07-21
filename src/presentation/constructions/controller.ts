
import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { ConstructionsService } from "../services/constructions.service";
import { AddConstructionsDto } from "../../domain/dtos/constructions/add-constructions.dto";


export class ConstructionsController {

    constructor(
        private readonly constructionsService: ConstructionsService
    ){}

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({message: error.message})
        }

        console.log(error)
        return res.status(500).json({message: 'Something went very wrong 🧨🧨🧨'})
    }
//--------------------------------------------------------------------------------------------

    createConstructions = (req: Request, res: Response) => {
       const [error, createConstructionsDto] = AddConstructionsDto.createConstructions(req.body)
       if(error) throw res.status(422).json({ message: error })

        // const sessionUserId = req.body.id
        // console.log(sessionUserId) // lo voy a usar luego para verificar que si existe el player en ese usuario id

        this.constructionsService.createConstructions(createConstructionsDto!)
        .then(construc  => res.status(201).json(construc))
        .catch(error => this.handleError(error, res))
      
    }
}