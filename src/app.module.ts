import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostagensModule } from './postagens/postagens.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://caiobrone:32655523a@cluster0.prye4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    PostagensModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
