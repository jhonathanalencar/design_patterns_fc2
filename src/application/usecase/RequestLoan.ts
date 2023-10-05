import { Installment } from "../../domain/entity/Installment";
import { Loan } from "../../domain/entity/Loan";
import { InstallmentGeneratorSimpleFactory } from "../../domain/factory/InstallmentGeneratorSimpleFactory";
import { RepositoryAbstractFactory } from "../factory/RepositoryAbstractFactory";
import { LoanRepository } from "../repository/LoanRepository";
import { InstallmentRepository } from "../repository/installmentRepository";
import { Usecase } from "./Usecase";

export class RequestLoan implements Usecase {
  loanRepository: LoanRepository;
  installmentRepository: InstallmentRepository;

  constructor(readonly repositoryFactory: RepositoryAbstractFactory) {
    this.loanRepository = repositoryFactory.createLoanRepository();
    this.installmentRepository =
      repositoryFactory.createInstallmentRepository();
  }

  async execute(input: Input): Promise<void> {
    const amount = input.purchasePrice - input.downPayment;
    const loanPeriod = input.period;
    const loanRate = 1;
    const loanType = input.type;
    await this.loanRepository.save(
      new Loan(input.code, amount, loanPeriod, loanRate, loanType, input.salary)
    );
    const generateInstallments =
      InstallmentGeneratorSimpleFactory.create(loanType);
    const installments = await generateInstallments.generate(
      input.code,
      amount,
      input.period,
      loanRate
    );
    for (const installment of installments) {
      await this.installmentRepository.save(
        new Installment(
          input.code,
          installment.number,
          installment.amount,
          installment.interest,
          installment.amortization,
          installment.balance
        )
      );
    }
  }
}

type Input = {
  code: string;
  purchasePrice: number;
  downPayment: number;
  salary: number;
  period: number;
  type: string;
};
