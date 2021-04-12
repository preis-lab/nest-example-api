import { Test, TestingModule } from '@nestjs/testing';
import { HealthzRepositoryService } from './healthz-repository.service';

describe('HealthzRepositoryService', () => {
  let service: HealthzRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthzRepositoryService],
    }).compile();

    service = module.get<HealthzRepositoryService>(HealthzRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
