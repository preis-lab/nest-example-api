import { Module } from '@nestjs/common';
import { HealthzController } from '../infra/rest/healthz.controller';
import { HealthzService } from './healthz.service';
import { HealthzRepositoryModule } from './../data/healthz-repository/healthz-repository.module';

@Module({
  controllers: [HealthzController],
  providers: [HealthzService],
  imports: [HealthzRepositoryModule],
})
export class HealthzModule {}
