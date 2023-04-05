import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OmdbIntegrationService } from './infraestructure/services/omdb.service';
import { OmdbConfigModule } from 'src/config/omdb/config.module';

@Module({
  imports: [HttpModule, OmdbConfigModule],
  providers: [OmdbIntegrationService],
  exports: [OmdbIntegrationService],
})
export class OmdbIntegrationModule {}
