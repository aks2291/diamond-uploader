import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200);
  });

  it('/diamond (POST - 1)', () => {
    const body = {
      "color": "G",
      "cut": "D",
      "clarity": "SI1",
      "caratWeight": 1
    };

    return request(app.getHttpServer())
      .post('/diamond')
      .send(body)
      .expect(201)
      .expect({
        "hash": "60322ff6178d0f57a412ef64d06d0c68dfe3637a3b635c79d8f1e79a54c5b776"
      });
  });

  it('/diamond (POST - 2)', () => {
    const body = {
      "color": "G",
      "cut": "GD",
      "clarity": "VS1",
      "caratWeight": 0.8
    };

    return request(app.getHttpServer())
      .post('/diamond')
      .send(body)
      .expect(201)
      .expect({
        "hash": "ff5da3ea68b879ad4863a0a4e809df512ecfcd55b2e85d8b4f5494dd7956a9e8"
      });
  });
});
