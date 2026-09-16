import { Module } from '@nestjs/common';
import { AspirationController } from './aspirations.controller.js';
import { AspirationService } from './aspirations.service.js';

@Module({
  controllers: [AspirationController],
  providers: [AspirationService]
})
export class CategoriesModule {}