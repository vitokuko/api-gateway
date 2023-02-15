import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SERVICE_USER_NAME, SERVICE_USER_URL } from './environments';
import { handleAuth } from './utils/auth';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      server: {
        context: handleAuth,
      },
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [{ name: SERVICE_USER_NAME, url: SERVICE_USER_URL }],
        }),
        buildService: ({ url }) =>
          new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }: any) {
              request.http.headers.set('user', JSON.stringify(context.user));
              request.http.headers.set('authorization', context.authorization);
            },
          }),
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
