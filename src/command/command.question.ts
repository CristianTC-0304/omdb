import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'movie-questions' })
export class SearchMovieQuestions {
  @Question({
    message: 'What movie would you like to search?',
    name: 'movieName',
    type: 'input',
    validate: (input: any) => {
      if (input.length === 0) return 'We dont have the movie name';
      return true;
    },
  })
  parseMovieName(val: string) {
    return val;
  }
}
