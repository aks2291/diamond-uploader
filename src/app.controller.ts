import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DiamondDto } from './diamond.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('health')
  getHealth(): { uptime: string } {
    return { uptime: this.appService.getHealth()};
  }

  @Post('diamond')
  create(@Body() diamondDto: DiamondDto): { hash: string } {
    return { hash: this.appService.createHash(diamondDto)};
  }
}
