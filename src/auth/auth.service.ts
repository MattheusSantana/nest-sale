import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validate(): string {
    return 'Auth';
  }
}
