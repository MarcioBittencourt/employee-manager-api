import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReconhecimentoService } from './reconhecimento.service';
import { CreateReconhecimentoDto } from './dto/create-reconhecimento.dto';
import { ApiBody, ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('recognitions')
@Controller('recognitions')
export class ReconhecimentoController {
    constructor(private readonly reconhecimentoService: ReconhecimentoService) {}

    @ApiBody({type: CreateReconhecimentoDto })
    @ApiResponse({ status: 201, description: 'Reconhecimento criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @Post()
    create(@Body() reconhecimentoDto: CreateReconhecimentoDto) {
        return this.reconhecimentoService.create(reconhecimentoDto);
    }

    @ApiResponse({
        status: 200,
        description: 'Lista de todas os reconhecimentos',
        type: CreateReconhecimentoDto,
        isArray: true,
    })
    @ApiResponse({ status: 400, description: 'Dados não encontrados!' })
    @Get()
    findAll() {
        return this.reconhecimentoService.findAll();
    }
    
    @ApiParam({ name: 'id', type: Number, description: 'Id do reconhecimento' })
    @ApiResponse({
        status: 200,
        description: 'Reconhecimento encontrado com sucesso!',
        type: CreateReconhecimentoDto,
    })
    @ApiResponse({ status: 404, description: 'Reconhecimento não encontrado!' })
    @Get(':id')
    findById(@Param('id') id: number) {
        return this.reconhecimentoService.findById(+id);
    }

    @ApiParam({ name: 'id', type: Number, description: 'Id do reconhecimento' })
    @ApiResponse({ status: 200, description: 'Reconhecimento removido com sucesso' })
    @ApiResponse({ status: 404, description: 'Reconhecimento não encontrado' })
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.reconhecimentoService.remove(+id);
    }
}
