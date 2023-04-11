import {
  Command,
  CommandFactory,
  CommandRunner,
  InquirerService,
} from 'nest-commander';
import { OmdbIntegrationService } from '../integration/omdb/infraestructure/services/omdb.service';
import { Spinner } from 'clui';
import Table from 'cli-table3';
import { AppModule } from 'src/app.module';

@Command({
  name: 'movie-runner',
  arguments: '[movieName][menu]',
  options: { isDefault: true },
})
export class MovieRunner extends CommandRunner {
  constructor(
    private readonly inquirer: InquirerService,
    private readonly omdbIntegrationService: OmdbIntegrationService,
  ) {
    super();
  }

  async run(inputs: string[], options: Record<string, string>): Promise<void> {
    const { movieName } = await this.inquirer.ask('movie-questions', options);

    const spinner = new Spinner('We are looking for the movie, please wait...');
    spinner.start();

    const {
      Response,
      Title,
      Released,
      imdbRating,
      Ratings,
      Country,
      Language,
      Plot,
      Actors,
    } = await this.omdbIntegrationService.getMovieByTitle(movieName);

    if (Response === 'False') {
      spinner.stop();
      console.error('This movie not found!');
      await CommandFactory.run(AppModule);
    }

    spinner.stop();

    const table = new Table();
    table.push(
      { Title: Title },
      { 'Year of release': Released },
      { 'IMDB rating': imdbRating },
      { Rating: Ratings[0].Value },
      { 'Country of production': Country },
      { Language: Language },
      { Plot: Plot },
      { Actors: Actors },
    );
    console.log(table.toString());

    const { menu } = await this.inquirer.ask('movie-questions-menu', options);

    if (menu == 'no') process.exit(0);

    await CommandFactory.run(AppModule);
  }
}
