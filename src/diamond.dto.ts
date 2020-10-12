import { IsAlpha, IsAlphanumeric, IsUppercase, IsNumber } from 'class-validator';

export class DiamondDto {
    @IsUppercase()
    @IsAlpha()
    color: string;

    @IsUppercase()
    @IsAlpha()
    cut: string;

    @IsUppercase()
    @IsAlphanumeric()
    clarity: string;

    @IsNumber()
    caratWeight: number;
}