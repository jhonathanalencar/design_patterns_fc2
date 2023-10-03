import { LoanRepository } from "../repository/LoanRepository";
import { InstallmentRepository } from "../repository/installmentRepository";

export interface RepositoryAbstractFactory {
  createLoanRepository(): LoanRepository;
  createInstallmentRepository(): InstallmentRepository;
}
