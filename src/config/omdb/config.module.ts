import { Module } from '@nestjs/common';
import configuration from './configuration';
import { OmdbConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, OmdbConfigService],
  exports: [ConfigService, OmdbConfigService],
})
export class OmdbConfigModule {}
