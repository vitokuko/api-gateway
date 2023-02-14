import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        serviceList: [
          {
            name: 'users',
            url: 'http://localhost:4005/graphql',
          },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
