import { Module } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { QrcodeGateway } from './qrcode.gateway';

@Module({
  providers: [QrcodeGateway, QrcodeService],
})
export class QrcodeModule {}
