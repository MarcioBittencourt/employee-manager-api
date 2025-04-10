import { Module } from '@nestjs/common';
import { ReconhecimentoController } from './reconhecimento.controller';
import { ReconhecimentoService } from './reconhecimento.service';
import { ReconhecimentoRepository } from './reconhecimento.repository';

@Module({
  controllers: [ReconhecimentoController],
  providers: [ReconhecimentoService, ReconhecimentoRepository]
})
export class ReconhecimentoModule {}
