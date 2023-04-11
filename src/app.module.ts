import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmdbConfigModule } from './config/omdb/config.module';
import { OmdbIntegrationModule } from './integration/omdb/omdb.module';
import { MovieRunner } from './command/command.runner';
import { SearchMovieQuestions } from './command/command.question';
import { MenuMovieQuestions } from './command/commandmenu.question';

@Module({
  imports: [OmdbConfigModule, OmdbIntegrationModule],
  controllers: [AppController],
  providers: [
    MovieRunner,
    MenuMovieQuestions,
    SearchMovieQuestions,
    AppService,
  ],
})
export class AppModule {}
