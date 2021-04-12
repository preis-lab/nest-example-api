import { Injectable } from '@nestjs/common';
import { HealthzInterface } from '../shared/interfaces';
import { DuplicatedKey } from '../shared/interfaces/errors';
import { HealthzRepositoryService } from '../data/healthz-repository/healthz-repository.service';

@Injectable()
export class HealthzService {
  constructor(private readonly repository: HealthzRepositoryService) {}

  getHttpStatus(key: string): HealthzInterface {
    if (this.repository.has(key)) throw new DuplicatedKey();
    this.repository.add(key);
    return {
      key,
    };
  }
}
