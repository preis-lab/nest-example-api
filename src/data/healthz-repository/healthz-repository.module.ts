import { Module } from '@nestjs/common';
import { HealthzService } from 'src/healthz/healthz.service';
import { HealthzRepositoryService } from './healthz-repository.service';

@Module({
  providers: [HealthzRepositoryService],
  exports: [HealthzRepositoryService],
})
export class HealthzRepositoryModule {}
