import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService    = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });


  describe('Diamond object hash', () => {
    it('should create hash of the diamond Object', () => {
      jest.spyOn(appService, 'createHash').mockImplementation((any) => 'ff5da3ea68b879ad4863a0a4e809df512ecfcd55b2e85d8b4f5494dd7956a9e8');
      expect(appController.create({
        "color": "G",
        "cut": "GD",
        "clarity": "VS1",
        "caratWeight": 0.8
      })).toStrictEqual({"hash": "ff5da3ea68b879ad4863a0a4e809df512ecfcd55b2e85d8b4f5494dd7956a9e8"});
    });
  });
});
