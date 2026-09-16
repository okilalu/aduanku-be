import { Controller } from "@nestjs/common";
import { AspirationService } from "./aspirations.service.js";

@Controller()
export class AspirationController{
    constructor(private readonly categoriesService: AspirationService) {}
}