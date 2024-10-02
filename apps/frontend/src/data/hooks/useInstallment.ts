import { CalculateInstallment } from '@gstore/core'

export default function useParcelamento(value: number, quantify: number = 12) {
    const valueInstallment = new CalculateInstallment().executar(value, quantify)
    return valueInstallment
}
