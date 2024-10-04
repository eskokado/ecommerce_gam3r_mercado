'use client'
import {
    OrderItem,
    Order,
    OrderDelivery,
    Status,
    PaymentMethod,
    CarItem,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useCar from '../hooks/useCar'
import useAPI from '../hooks/useAPI'

export interface ContextPaymentProps {
    paymentMethod: PaymentMethod
    delivery: Partial<OrderDelivery>
    updatepaymentMethod: (paymentMethod: PaymentMethod) => void
    updateDelivery: (delivery: Partial<OrderDelivery>) => void
    checkout: () => void
}

const ContextPayment = createContext<ContextPaymentProps>({} as any)

export function ProviderPayment(props: any) {
    const { httpPost } = useAPI()
    const { items, valueTotal, clearCar } = useCar()
    const { saveItem, getItem } = useLocalStorage()
    const router = useRouter()

    const [paymentMethod, setpaymentMethod] = useState<PaymentMethod>(
        PaymentMethod.PIX,
    )
    const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({})

    function updatepaymentMethod(paymentMethod: PaymentMethod) {
        saveItem('paymentMethod', paymentMethod)
        setpaymentMethod(paymentMethod)
    }

    function updateDelivery(delivery: Partial<OrderDelivery>) {
        saveItem('delivery', delivery)
        setDelivery(delivery)
    }

    async function checkout() {
        const order: Partial<Order> = {
            date: new Date(),
            paymentMethod,
            valueTotal,
            delivery: delivery as OrderDelivery,
            status: Status.RECEBIDO,
            items: items.map(
                (item: CarItem) =>
                    ({
                        product: item.product,
                        quantity: item.quantity,
                        unitPrice: item.product.promotionalPrice,
                    }) as OrderItem,
            ),
        }

        await httpPost('/orders', order)
        clearCar()
        router.push('/checkout/success')
    }

    useEffect(() => {
        const delivery = getItem('delivery')
        const paymentMethod = getItem('paymentMethod')
        if (delivery) setDelivery(delivery)
        if (paymentMethod) setpaymentMethod(paymentMethod)
    }, [getItem])

    return (
        <ContextPayment.Provider
            value={{
                delivery,
                paymentMethod,
                updateDelivery,
                updatepaymentMethod,
                checkout,
            }}
        >
            {props.children}
        </ContextPayment.Provider>
    )
}

export default ContextPayment
