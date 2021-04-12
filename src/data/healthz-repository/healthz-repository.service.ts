import { Injectable } from '@nestjs/common';

const keys = new Set();

@Injectable()
export class HealthzRepositoryService {
  add(key: string): string {
    keys.add(key);
    return key;
  }

  has(key: string): boolean {
    return keys.has(key);
  }
}
