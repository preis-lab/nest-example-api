import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthzModule } from './healthz/healthz.module';
import { HealthzRepositoryModule } from './data/healthz-repository/healthz-repository.module';

@Module({
  imports: [HealthzModule, HealthzRepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
