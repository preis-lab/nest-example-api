import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { HttpInterface } from '../../shared/interfaces';
import { HealthzService } from '../../healthz/healthz.service';
import { DuplicatedKey } from '../../shared/interfaces/errors';

@Controller('healthz')
export class HealthzController {
  constructor(private service: HealthzService) {}

  @Get()
  getHealthz(@Query('key') key: string): HttpInterface {
    try {
      return {
        statusCode: HttpStatus.OK,
        data: this.service.getHttpStatus(key),
      };
    } catch (error) {
      if (error instanceof DuplicatedKey) {
        throw new HttpException(`Key ${key} exists`, HttpStatus.BAD_REQUEST);
      }
    }
  }
}
