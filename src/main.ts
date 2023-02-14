import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import * as chalk from 'chalk';
import { rateLimit } from 'express-rate-limit';
import { DOMAIN, NODE_ENV, PORT, SERVICE_PREFIX } from './environments';

declare const module: any;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      cors: true,
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 10000,
      }),
    );

    app.setGlobalPrefix(SERVICE_PREFIX);

    await app.listen(PORT);

    // hot module replacement
    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }

    NODE_ENV !== 'production'
      ? console.log(
          `🚀  Server ready at http://${DOMAIN}:${chalk
            .hex('#87e8de')
            .bold(`${PORT}`)}/graphql`,
          `(Env: ${chalk.hex('#FF6A6A').bold(`${NODE_ENV}`)} ${chalk
            .hex('#FFAA6A')
            .bold(`${SERVICE_PREFIX}`)})`,
        )
      : console.log(
          `🚀  Server is listening on port ${chalk
            .hex('#87e8de')
            .bold(`${PORT}`)}/graphql`,
          `(Env: ${chalk.hex('#FF6A6A').bold(`${NODE_ENV}`)})`,
        );
  } catch (error) {
    console.error(
      `❌  Error starting server, ${error}`,
      '',
      'Bootstrap',
      false,
    );
    process.exit();
  }
}
bootstrap();
