import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QrcodeGateway } from './qrcode/qrcode.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly qrcodeGateway: QrcodeGateway,

  ) {}

  @Get()
  getHello(): string {
    this.qrcodeGateway.chat()
    return this.appService.getHello();
  }
}
