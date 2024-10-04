import { CalculateInstallment } from '@gstore/core'

export default function useInstallment(value: number, quantify: number = 12) {
    const valueInstallment = new CalculateInstallment().executar(value, quantify)
    return valueInstallment
}
