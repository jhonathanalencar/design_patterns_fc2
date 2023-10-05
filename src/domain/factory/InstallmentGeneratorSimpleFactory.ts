import { InstallmentGeneratorPrice } from "../strategy/InstallmentGeneratorPrice";
import { InstallmentGeneratorSac } from "../strategy/InstallmentGeneratorSac";

export class InstallmentGeneratorSimpleFactory {
  static create(type: string) {
    if (type === "price") {
      return new InstallmentGeneratorPrice();
    }

    if (type === "sac") {
      return new InstallmentGeneratorSac();
    }

    throw new Error();
  }
}
