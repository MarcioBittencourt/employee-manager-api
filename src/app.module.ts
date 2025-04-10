import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReconhecimentoModule } from './reconhecimentos/reconhecimento.module';

@Module({
  imports: [ReconhecimentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
