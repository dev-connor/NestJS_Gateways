import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets'
import { QrcodeService } from './qrcode.service'
import { CreateQrcodeDto } from './dto/create-qrcode.dto'
import { UpdateQrcodeDto } from './dto/update-qrcode.dto'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(80, {cors: {origin: '*'}})
export class QrcodeGateway {
  constructor(private readonly qrcodeService: QrcodeService) {}
  @WebSocketServer()
  server: Server

  @SubscribeMessage('createQrcode')
  create(@MessageBody() createQrcodeDto: CreateQrcodeDto) {
    return this.qrcodeService.create(createQrcodeDto)
  }

  @SubscribeMessage('findAllQrcode')
  findAll() {
    return this.qrcodeService.findAll()
  }

  @SubscribeMessage('findOneQrcode')
  findOne(@MessageBody() id: number) {
    return this.qrcodeService.findOne(id)
  }

  @SubscribeMessage('updateQrcode')
  update(@MessageBody() updateQrcodeDto: UpdateQrcodeDto) {
    return this.qrcodeService.update(updateQrcodeDto.id, updateQrcodeDto)
  }

  @SubscribeMessage('removeQrcode')
  remove(@MessageBody() id: number) {
    return this.qrcodeService.remove(id)
  }

  @SubscribeMessage('chat')
  chat() {
    this.server.emit('chat', {
      store_id: 1,
      tablet_id: 2,
    })
    // return this.qrcodeService.findOne(id)
  }
}
