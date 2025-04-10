import { Injectable } from "@nestjs/common";
import { Reconhecimento } from "./entities/reconhecimento";
import { CreateReconhecimentoDto } from "./dto/create-reconhecimento.dto";

@Injectable()
export class ReconhecimentoRepository {
    reconhecimentos: Reconhecimento[] = 
    [
        {
            uuid: "1",
            id: 1,
            from: "Fulano",
            to: "Ciclano",
            message: "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
            coins: 10
        },
        {
            uuid: "2",
            id: 2,
            from: "Ciclano",
            to: "Fulano",
            message: "Obrigado por sempre colaborar com o time, sua energia contagia a todos!",
            coins: 10
        }
    ];

    save(reconhecimento: CreateReconhecimentoDto) {
        this.reconhecimentos.push(reconhecimento);
        return reconhecimento;
    }

    find() {
        return this.reconhecimentos;
    }

    findById(id: number) {
        return this.reconhecimentos.find((reconhecimento: CreateReconhecimentoDto) => reconhecimento.id === id);
    }

    delete(id: number) {
        this.reconhecimentos = this.reconhecimentos.filter((reconhecimento) => reconhecimento.id !== id);
    }
}