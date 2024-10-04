'use client'
import HeaderCheckout from '@/components/checkout/HeaderCheckout'
import FormDelivery from '@/components/checkout/payment/FormDelivery'
import PaymentSummary from '@/components/checkout/payment/PaymentSummary'
import SelectPaymentMethod from '@/components/checkout/payment/SelectPaymentMethod'
import useCar from '@/data/hooks/useCar'
import usePayment from '@/data/hooks/usePayment'

export default function Page() {
    const { installment, qtyItems, valueTotal, valueTotalFull } = useCar()
    const { delivery, paymentMethod, updateDelivery, updatepaymentMethod, checkout } =
        usePayment()

    return (
        <div className="flex flex-col gap-7 container">
            <HeaderCheckout passo="pagamento" />
            <div className="flex gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <SelectPaymentMethod
                        paymentMethod={paymentMethod}
                        updatedPaymentMethod={updatepaymentMethod}
                    />
                <FormDelivery delivery={delivery} updatedDelivery={updateDelivery} />
                </div>
                <PaymentSummary
                    qtyItems={qtyItems}
                    valueTotal={valueTotal}
                    valueTotalFull={valueTotalFull}
                    installment={installment}
                    checkout={checkout}
                    className="mt-12"
                />
            </div>
        </div>
    )
}
