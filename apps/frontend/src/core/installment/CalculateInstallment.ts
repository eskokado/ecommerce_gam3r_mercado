import { MAX_INSTALLMENT_QTY, MONTHLY_INTEREST_RATE } from '../constants'
import Installment from './Installment'

export default class CalculateInstallment {
    executar(
        value: number,
        numberOfInstallments: number = MAX_INSTALLMENT_QTY,
        interestRate: number = MONTHLY_INTEREST_RATE
    ): Installment {
        if (numberOfInstallments < 2 || numberOfInstallments > MAX_INSTALLMENT_QTY) {
            throw new Error(`Quantidade de parcelas deve ser entre 2 e ${MAX_INSTALLMENT_QTY}`)
        }

        const totalWithRate = this.calculateRateComposts(value, interestRate, numberOfInstallments)

        return {
            valueInstallment: this.withTwoDecimalPlaces(totalWithRate / numberOfInstallments),
            valueTotal: this.withTwoDecimalPlaces(totalWithRate),
            numberOfInstallments,
            interestRate,
        }
    }

    private calculateRateComposts(valueTotal: number, monthlyRate: number, numberOfInstallments: number) {
        return valueTotal * Math.pow(1 + monthlyRate, numberOfInstallments)
    }

    private withTwoDecimalPlaces(value: number): number {
        return Math.round(value * 100) / 100
    }
}
