import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReconhecimentoModule } from './reconhecimentos/reconhecimento.module';
import { Reconhecimento } from './reconhecimentos/entities/reconhecimento';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Reconhecimento],
      synchronize: true,
    }),
    ReconhecimentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
