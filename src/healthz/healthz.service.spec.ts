import { Test, TestingModule } from '@nestjs/testing';
import { HealthzService } from './healthz.service';
import { HealthzRepositoryModule } from './../data/healthz-repository/healthz-repository.module';

import { DuplicatedKey } from '../shared/interfaces/errors';

describe('HealthzService', () => {
  let service: HealthzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthzService],
      imports: [HealthzRepositoryModule],
    }).compile();

    service = module.get<HealthzService>(HealthzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('must retrive the key', () => {
    const httpStatus = service.getHttpStatus('ronaldoBrilhaMuitoNoCorinthians');
    expect(httpStatus).toHaveProperty('key');
    expect(httpStatus.key).toEqual('ronaldoBrilhaMuitoNoCorinthians');
  });

  it('throw an error if the key exists', () => {
    try {
      service.getHttpStatus('ronaldoBrilhaMuitoNoCorinthians');
    } catch (error) {
      expect(error).toBeInstanceOf(DuplicatedKey);
    }
  });

  it('must retrive another key', () => {
    const httpStatus = service.getHttpStatus('paulao');
    expect(httpStatus).toHaveProperty('key');
    expect(httpStatus.key).toEqual('paulao');
  });

});
