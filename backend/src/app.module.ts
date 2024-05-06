import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrcodeModule } from './qrcode/qrcode.module';
import { QrcodeGateway } from './qrcode/qrcode.gateway';
import { QrcodeService } from './qrcode/qrcode.service';

@Module({
  imports: [QrcodeModule],
  controllers: [AppController],
  providers: [AppService, QrcodeGateway, QrcodeService],
})
export class AppModule {}
