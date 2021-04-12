import { DefaultError } from '../defaultError';
import { Codes } from './codes';

export class DuplicatedKey implements DefaultError {
  code: Codes.DUPLICATED_KEY;
  message?: 'This key already exists';
}
