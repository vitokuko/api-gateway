import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SERVICE_USER_NAME, SERVICE_USER_URL } from './environments';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        serviceList: [
          {
            name: SERVICE_USER_NAME,
            url: SERVICE_USER_URL,
          },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
