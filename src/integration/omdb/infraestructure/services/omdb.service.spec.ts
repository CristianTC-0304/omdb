import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { OmdbConfigService } from '../../../../config/omdb/config.service';
import { OmdbIntegrationService } from './omdb.service';
import {
  mockApiKey,
  mockErrorResponseMove,
  mockOmdbConfigService,
  mockTitleMovie,
  mockTitleMovieWront,
  mockUrl,
  mockSuccessResponseMove,
} from '../mocks/omdb.mock';

describe('OmdbIntegrationService', () => {
  let service: OmdbIntegrationService;
  let omdbConfigService: OmdbConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        OmdbIntegrationService,
        { provide: OmdbConfigService, useValue: mockOmdbConfigService },
      ],
    }).compile();

    service = module.get<OmdbIntegrationService>(OmdbIntegrationService);
    omdbConfigService = module.get<OmdbConfigService>(OmdbConfigService);
  });

  it('should return information with a movie is found', async () => {
    const spyApiKeyOmdbConfigService = jest.spyOn(
      omdbConfigService,
      'apiKey',
      'get',
    );
    const getApiKey = omdbConfigService.apiKey;

    const spyUrlOmdbConfigService = jest.spyOn(omdbConfigService, 'url', 'get');
    const getUrl = omdbConfigService.url;

    expect(spyApiKeyOmdbConfigService).toHaveBeenCalled();
    expect(getApiKey).toEqual(mockApiKey);
    expect(spyUrlOmdbConfigService).toHaveBeenCalled();
    expect(getUrl).toStrictEqual(mockUrl);
    expect(await service.getMovieByTitle(mockTitleMovie)).toEqual(
      mockSuccessResponseMove,
    );
  });

  it('should return error with a movie is not found', async () => {
    const { Response, Error } = await service.getMovieByTitle(
      mockTitleMovieWront,
    );

    if (!Response) expect(Error).toBe(mockErrorResponseMove.Error);
  });
});
