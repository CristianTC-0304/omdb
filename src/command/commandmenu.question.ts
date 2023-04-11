import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'movie-questions-menu' })
export class MenuMovieQuestions {
  @Question({
    message: 'do you want to continue',
    name: 'menu',
    type: 'list',
    choices: ['yes', 'no'],
  })
  parseMovieMenu(val: string) {
    return val;
  }
}
