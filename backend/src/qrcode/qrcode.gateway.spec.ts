import { Test, TestingModule } from '@nestjs/testing';
import { QrcodeGateway } from './qrcode.gateway';
import { QrcodeService } from './qrcode.service';

describe('QrcodeGateway', () => {
  let gateway: QrcodeGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrcodeGateway, QrcodeService],
    }).compile();

    gateway = module.get<QrcodeGateway>(QrcodeGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
