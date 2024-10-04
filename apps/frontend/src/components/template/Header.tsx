'use client'
import Logo from '../shared/Logo'
import IconCar from '../shared/IconCar'
import Link from 'next/link'
import useCar from '@/data/hooks/useCar'

export default function Header() {
    const { qtyItems } = useCar()
    return (
        <div
            className="flex flex-col h-20"
            style={{
                background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
            }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Link href="/checkout/car">
                        <IconCar qtyItems={qtyItems} />
                    </Link>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}
