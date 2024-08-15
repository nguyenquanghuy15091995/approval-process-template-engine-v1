import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('pr')
  @Render('pr')
  prDetail() {
    return { message: 'This is PR detail!' };
  }

  @Get('po')
  @Render('po')
  poDetail() {
    return { message: 'This is PO detail!' };
  }
}
