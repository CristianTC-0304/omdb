import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

async function bootstrap() {
  await CommandFactory.runWithoutClosing(AppModule, ['error', 'warn']).catch(
    (err) => {
      console.log('cual es el error', err);
    },
  );
}
bootstrap();
