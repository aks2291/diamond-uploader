import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [AppService],
    }).compile();

    appService    = app.get<AppService>(AppService);
  });


  describe('Hash create service', () => {
    it('should create hash of the diamond Object 1', () => {
      expect(appService.createHash({
        "color": "G",
        "cut": "D",
        "clarity": "SI1",
        "caratWeight": 1
      })).toBe("60322ff6178d0f57a412ef64d06d0c68dfe3637a3b635c79d8f1e79a54c5b776");
    });

    it('should create hash of the diamond Object 2', () => {
      expect(appService.createHash({
        "color": "G",
        "cut": "GD",
        "clarity": "VS1",
        "caratWeight": 0.8
      })).toBe("ff5da3ea68b879ad4863a0a4e809df512ecfcd55b2e85d8b4f5494dd7956a9e8");
    });
  });
});
