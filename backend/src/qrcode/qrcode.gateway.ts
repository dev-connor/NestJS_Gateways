import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { QrcodeService } from './qrcode.service';
import { CreateQrcodeDto } from './dto/create-qrcode.dto';
import { UpdateQrcodeDto } from './dto/update-qrcode.dto';

@WebSocketGateway()
export class QrcodeGateway {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @SubscribeMessage('createQrcode')
  create(@MessageBody() createQrcodeDto: CreateQrcodeDto) {
    return this.qrcodeService.create(createQrcodeDto);
  }

  @SubscribeMessage('findAllQrcode')
  findAll() {
    return this.qrcodeService.findAll();
  }

  @SubscribeMessage('findOneQrcode')
  findOne(@MessageBody() id: number) {
    return this.qrcodeService.findOne(id);
  }

  @SubscribeMessage('updateQrcode')
  update(@MessageBody() updateQrcodeDto: UpdateQrcodeDto) {
    return this.qrcodeService.update(updateQrcodeDto.id, updateQrcodeDto);
  }

  @SubscribeMessage('removeQrcode')
  remove(@MessageBody() id: number) {
    return this.qrcodeService.remove(id);
  }
}
