import { Installment } from "./Installment";

export interface InstallmentGenerator {
  generate(
    code: string,
    amount: number,
    period: number,
    rate: number
  ): Promise<Installment[]>;
}
