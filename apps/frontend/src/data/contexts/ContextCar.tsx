'use client'
import {
    CalculateInstallment,
    Car,
    CarItem,
    Installment,
    Product,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextCarProps {
    items: CarItem[]
    qtyItems: number
    valueTotalFull: number
    valueTotal: number
    installment: Installment
    addItem: (produto: Product) => void
    removeItem: (produto: Product) => void
    removeProduct: (produto: Product) => void
    clearCar: () => void
}

const ContextCar = createContext<ContextCarProps>({} as any)

export function ProviderCar(props: any) {
    const { saveItem, getItem } = useLocalStorage()
    const [car, setCar] = useState<Car>(new Car())

    function addItem(produto: Product) {
        updateCar(car.addItem(produto))
    }

    function removeItem(produto: Product) {
        updateCar(car.removeItem(produto))
    }

    function removeProduct(produto: Product) {
        updateCar(car.removeProduct(produto))
    }

    function clearCar() {
        updateCar(car.clear())
    }

    function updateCar(car: Car) {
        saveItem('car', car.items)
        setCar(car)
    }

    useEffect(() => {
        const itemsSalved: CarItem[] = getItem('car')
        if (itemsSalved) setCar(new Car(itemsSalved))
    }, [getItem])

    return (
        <ContextCar.Provider
            value={{
                items: car.items,
                qtyItems: car.qtyItems,
                valueTotal: car.valueTotal,
                valueTotalFull: car.valueTotalFull,
                installment: new CalculateInstallment().executar(
                    car.valueTotal,
                ),
                addItem,
                removeItem,
                removeProduct,
                clearCar,
            }}
        >
            {props.children}
        </ContextCar.Provider>
    )
}

export default ContextCar
