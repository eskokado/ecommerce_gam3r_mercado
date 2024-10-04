import Link from 'next/link'

interface HeaderCheckoutProps {
    passo: 'carrinho' | 'pagamento'
}

export default function HeaderCheckout(props: HeaderCheckoutProps) {
    function corSelected(passo: string) {
        return props.passo === passo ? 'text-pink-500' : 'text-zinc-400'
    }

    function bkSelected(passo: string) {
        return props.passo === passo
            ? 'bg-pink-500 text-white'
            : 'bg-zinc-400 text-black'
    }

    function renderItem(
        passo: 'carrinho' | 'pagamento',
        indice: number,
        titulo: string,
        caminho: string,
    ) {
        return (
            <Link
                href={caminho}
                className={`
                    flex items-center gap-2 cursor-pointer
                    ${corSelected(passo)}
                `}
            >
                <span
                    className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${bkSelected(passo)}
                    `}
                >
                    {indice}
                </span>
                <span>{titulo}</span>
            </Link>
        )
    }

    return (
        <div className="flex justify-center items-center gap-6 h-20 select-none">
            {renderItem('carrinho', 1, 'Carrinho', '/checkout/car')}
            <div className="bg-zinc-300 h-px w-12"></div>
            {renderItem('pagamento', 2, 'Pagamento', '/checkout/payment')}
        </div>
    )
}
