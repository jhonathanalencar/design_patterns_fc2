import { Installment } from "../entity/Installment";

export interface InstallmentGenerator {
  generate(
    code: string,
    amount: number,
    period: number,
    rate: number
  ): Promise<Installment[]>;
}
