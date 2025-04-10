import { Test, TestingModule } from '@nestjs/testing';
import { ReconhecimentoService } from './reconhecimento.service';
import { ReconhecimentoRepository } from './reconhecimento.repository';

describe('ReconhecimentoService', () => {
  let service: ReconhecimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReconhecimentoService, ReconhecimentoRepository],
    }).compile();

    service = module.get<ReconhecimentoService>(ReconhecimentoService);
  });

  it('deve cadastrar um reconhecimento', async () => {

    const reconhecimento = {
      "uuid": "3",
      "id": 3,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 1
    };

    const resultado = await service.create(reconhecimento);

    expect(resultado).toHaveProperty('id');
    expect(resultado).toHaveProperty('uuid');
    expect(resultado.from).toBe('Beltrano');
    expect(resultado.to).toBe('Ciclano');
    expect(resultado.message).toBe('Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!');
    expect(resultado.coins).toBe(1);
  });

  it('deve retornar um array com todos os reconhecimentos', async () => {

    const resultado = await service.findAll();

    expect(Array.isArray(resultado)).toBe(true);
    expect(resultado.length).toBeGreaterThan(0);

    resultado.forEach((reconhecimento) => {
      expect(reconhecimento).toHaveProperty('id');
      expect(reconhecimento).toHaveProperty('uuid');
      expect(reconhecimento).toHaveProperty('from');
      expect(reconhecimento).toHaveProperty('to');
      expect(reconhecimento).toHaveProperty('message');
      expect(reconhecimento).toHaveProperty('coins');
    });
  });

  it('deve retornar um reconhecimento com o ID fornecido', async () => {
    const resultado = await service.findById(1);

    expect(resultado).toEqual({
      uuid: "1",
      id: 1,
      from: "Fulano",
      to: "Ciclano",
      message: "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      coins: 10
    });
  });

  it('deve excluir um reconhecimento com o ID fornecido', async () => {
    await service.remove(1);

    const removido = await service.findById(1);

    expect(removido).toBeUndefined();

  });
});
