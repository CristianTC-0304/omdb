import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OmdbConfigService {
  constructor(private configService: ConfigService) {}

  get apiKey(): string {
    return this.configService.get<string>('omdb.apiKey');
  }

  get url(): string {
    return this.configService.get<string>('omdb.url');
  }
}
