import { LoanRepository } from "../../application/repository/LoanRepository";
import { Loan } from "../../domain/entity/Loan";
import { Connection } from "../database/Connection";

export class LoanDatabaseRepository implements LoanRepository {
  constructor(readonly connection: Connection) {}

  async save(loan: Loan): Promise<void> {
    await this.connection.query(
      "INSERT INTO cifer.loan (code, amount, period, rate, type) VALUES ($1, $2, $3, $4, $5)",
      [loan.code, loan.amount, loan.period, loan.rate, loan.type]
    );
  }

  async getByCode(code: string): Promise<Loan> {
    const [loanData] = await this.connection.query(
      "SELECT * FROM cifer.loan WHERE code = $1",
      [code]
    );

    if (!loanData) throw new Error();

    return new Loan(
      loanData.code,
      parseFloat(loanData.amount),
      loanData.period,
      loanData.rate,
      loanData.type,
      100000000
    );
  }
}
