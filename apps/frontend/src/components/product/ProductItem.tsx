'use client'
import { Money, Product } from '@/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import NotaReview from '../shared/NotaReview'

export interface ProductItemProps {
    product: Product
}

export default function ProductItem(props: ProductItemProps) {
    const { product } = props
    return (
        <Link
            href={`/product/${props.product.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5">
                <NotaReview nota={props.product.nota} />
            </div>
            <div className="w-full h-48 relative">
                <Image
                    src={product.image}
                    fill
                    className="object-contain"
                    alt="Imagem do Produto"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className="text-lg font-semibold">{product.name}</span>
                <div className="self-start text-sm border-b border-dashed">
                    {product.specifications.featured}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de {Money.formater(product.basePrice)}
                    </span>
                    <span className="text-xl font-semibold text-emerald-400">
                        por {Money.formater(product.promotionalPrice)}
                    </span>
                    {/* <span className="text-zinc-400 text-xs">
                        até {parcelamento.qtdeParcelas}x de{' '}
                        {Moeda.formatar(parcelamento.valorParcela)}
                    </span> */}
                </div>
                <button
                    className="
                      flex justify-center items-center gap-2 h-8
                      bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                    "
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('Adicionar ao carrinho')
                        // adicionarItem(props.produto)
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
            </div>
        </Link>
    )
}
