import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'movie-questions' })
export class SearchMovieQuestions {
  @Question({
    message: 'What movie would you like to search?',
    name: 'movieName',
    type: 'input',
  })
  parseMovieName(val: string) {
    return val;
  }
}
