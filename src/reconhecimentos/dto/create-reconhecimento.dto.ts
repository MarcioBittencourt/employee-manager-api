import { PickType, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { Reconhecimento } from "../entities/reconhecimento";

export class CreateReconhecimentoDto extends PickType(Reconhecimento, ['id', 'from', 'to', 'message', 'coins'] as const) {
    
    @ApiProperty({ example: 'Ciclano da Silva' })
    @IsNotEmpty({ message: "O remetente é obrigatorio!"})
    from: string;
    
    @ApiProperty({ example: 'Fulano da Silva' })
    @IsNotEmpty({ message: "O destinatario é obrigatorio!"})
    to: string;
    
    @ApiProperty({ example: 'Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!' })
    @IsString({ message: 'A mensagem deve ser uma string' })
    @IsNotEmpty({ message: "A mensagem é obrigatoria!"})
    message: string;
    
    @ApiProperty({ example: 10 })
    @IsNumber({}, { message: 'A quantidade de moedas deve ser um número' })
    @IsNotEmpty({ message: "A quantidade de moedas é obrigatorio!"})
    @Min(1, { message: 'O valor da moeda deve ser positivo e maior que 0' })
    coins: number;
}