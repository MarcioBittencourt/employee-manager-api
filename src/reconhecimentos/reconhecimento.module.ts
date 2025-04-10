import { Module } from '@nestjs/common';
import { ReconhecimentoController } from './reconhecimento.controller';
import { ReconhecimentoService } from './reconhecimento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reconhecimento } from './entities/reconhecimento';

@Module({
  imports: [TypeOrmModule.forFeature([Reconhecimento])],
  controllers: [ReconhecimentoController],
  providers: [ReconhecimentoService]
})
export class ReconhecimentoModule {}
