import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { QrcodeGateway } from './qrcode/qrcode.gateway'
import { QrcodeModule } from './qrcode/qrcode.module'

@Module({
  imports: [QrcodeModule],
  controllers: [AppController],
  providers: [AppService, QrcodeGateway],
})
export class AppModule {}
