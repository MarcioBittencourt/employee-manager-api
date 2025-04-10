import { Injectable } from '@nestjs/common';
import { CreateReconhecimentoDto } from './dto/create-reconhecimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reconhecimento } from './entities/reconhecimento';
import { Repository } from 'typeorm';

@Injectable()
export class ReconhecimentoService {
    constructor(@InjectRepository(Reconhecimento) private repositorio: Repository<Reconhecimento>) {}

    async create(reconhecimentoDto: CreateReconhecimentoDto) {
        const reconhecimento = this.repositorio.create(reconhecimentoDto)
        return await this.repositorio.save(reconhecimento);
    }
    
    async findAll() {
        return await this.repositorio.find();
    }

    async findById(id: number) {
        return await this.repositorio.findOneByOrFail({id});
    }

    async remove(id: number) {
        const reconhecimento = await this.findById(id);
        return this.repositorio.remove(reconhecimento);
    }
}
