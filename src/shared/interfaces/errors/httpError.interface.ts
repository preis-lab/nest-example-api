import { DefaultError } from '../defaultError';
import { Codes } from './codes';

export class HttpError implements DefaultError {
  readonly code: Codes.HTTP_ERROR;
  readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}
