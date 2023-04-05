import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { OmdbConfigService } from '../../../../config/omdb/config.service';
import { OmdbDto } from '../dtos/omdb.dto';

@Injectable()
export class OmdbIntegrationService {
  constructor(
    private omdbConfigService: OmdbConfigService,
    private httpService: HttpService,
  ) {}

  async getMovieByTitle(title: string): Promise<OmdbDto> {
    const urlbase = this.omdbConfigService.url;
    const apikey = this.omdbConfigService.apiKey;
    const url = `${urlbase}/?apiKey=${apikey}&t=${title}`;
    const { data } = await lastValueFrom(this.httpService.get(url));
    return data;
  }
}
