import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { OmdbIntegrationService } from '../integration/omdb/infraestructure/services/omdb.service';
import { Spinner } from 'clui';
import Table from 'cli-table3';

@Command({
  name: 'movie-runner',
  arguments: '[movieName]',
  options: { isDefault: true },
})
export class MovieRunner extends CommandRunner {
  constructor(
    private readonly inquirer: InquirerService,
    private readonly omdbIntegrationService: OmdbIntegrationService,
  ) {
    super();
  }

  async run(inputs: string[], options: { movieName: string }): Promise<void> {
    try {
      const { movieName } = await this.inquirer.ask('movie-questions', options);

      const spinner = new Spinner(
        'We are looking for the movie, please wait...',
      );
      spinner.start();

      if (!movieName) console.error('We dont have the movie name');

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
        throw Error('This movie not found!');
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
      process.on('SIGTERM', () => {
        process.exit(0);
      });
    } catch (err) {
      throw err;
    }
  }
}
