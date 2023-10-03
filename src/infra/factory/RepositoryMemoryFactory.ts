import { RepositoryAbstractFactory } from "../../application/factory/RepositoryAbstractFactory";
import { LoanRepository } from "../../application/repository/LoanRepository";
import { InstallmentRepository } from "../../application/repository/installmentRepository";
import { InstallmentMemoryRepository } from "../repository/memory/InstallmentMemoryRepository";
import { LoanMemoryRepository } from "../repository/memory/LoanMemoryRepository";

export class RepositoryMemoryFactory implements RepositoryAbstractFactory {
  createLoanRepository(): LoanRepository {
    return LoanMemoryRepository.getInstance();
  }

  createInstallmentRepository(): InstallmentRepository {
    return InstallmentMemoryRepository.getInstance();
  }
}
