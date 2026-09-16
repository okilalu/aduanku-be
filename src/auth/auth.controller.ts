import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service.js";

@Controller()
export class AuthController{
    constructor(private readonly categoriesService: AuthService) {}
}