import { Loan } from "../../domain/entity/Loan";

export interface LoanRepository {
  save(loan: Loan): Promise<void>;
  getByCode(code: string): Promise<Loan>;
}
