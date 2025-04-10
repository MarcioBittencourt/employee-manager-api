import { Injectable } from '@nestjs/common';
import { ReconhecimentoRepository } from './reconhecimento.repository';
import { CreateReconhecimentoDto } from './dto/create-reconhecimento.dto';

@Injectable()
export class ReconhecimentoService {
    constructor(private readonly repositorio: ReconhecimentoRepository) {}

    async create(reconhecimento: CreateReconhecimentoDto): Promise<CreateReconhecimentoDto> {
        return await this.repositorio.save(reconhecimento);
    }
    
    async findAll() {
        return await this.repositorio.find();
    }

    async findById(id: number) {
        return await this.repositorio.findById(id);
    }

    async remove(id: number) {
        await this.repositorio.delete(id);
        return `O reconhecimento ${id} foi removido com sucesso`;
    }
}
