import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DiamondDto } from './Diamond.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('health')
  getHealth(): { uptime: string } {
    return { uptime: this.appService.getHealth()};
  }

  @Post('diamond')
  create(@Body() diamondDto: DiamondDto): { hash: string } {
    return { hash: this.appService.createHash(diamondDto)};
  }
}
