import { IconShoppingCart } from '@tabler/icons-react'
import { Money } from '@gstore/core'
import Link from 'next/link'

export interface TotalCarProps {
    qtyItems: number
    valueTotal: number
}

export default function TotalCar(props: TotalCarProps) {
    return (
        <div className="flex justify-end items-center gap-7 bg-violet-dark h-24 rounded-xl px-7">
            <div className="flex flex-col">
                <span className="text-zinc-400">
                    Total ({props.qtyItems}{' '}
                    {props.qtyItems === 1 ? 'item' : 'itens'}):
                </span>
                <span className="text-emerald-500 text-2xl font-semibold">
                    {Money.formater(props.valueTotal ?? 0)}
                </span>
            </div>
            <Link href="/checkout/payment" className="button bg-indigo-700">
                <IconShoppingCart size={20} />
                <span>Continuar</span>
            </Link>
        </div>
    )
}
