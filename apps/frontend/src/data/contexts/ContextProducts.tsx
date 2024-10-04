'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { FilterProducts, Product } from '@gstore/core'
import useAPI from '../hooks/useAPI'

export interface ContextProductProps {
    products: Product[]
    search: string
    setSearch: (search: string) => void
    productById: (id: number) => Product | null
}

const ContextProduct = createContext<ContextProductProps>({} as any)

export function ProviderProducts(props: any) {
    const { httpGet } = useAPI()
    const [search, setSearch] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])

    const carregarProducts = useCallback(async () => {
        const products = await httpGet('/products')
        console.log("carregarProducts", carregarProducts)
        setProducts(products ?? [])
    }, [httpGet])

    useEffect(() => {
        carregarProducts()
    }, [carregarProducts])

    return (
        <ContextProduct.Provider
            value={{
                search,
                get products() {
                    if (!search) return products
                    return new FilterProducts().executar(search, products)
                },
                setSearch,
                productById: (id: number) =>
                    products.find((product) => product.id === id) ?? null,
            }}
        >
            {props.children}
        </ContextProduct.Provider>
    )
}

export default ContextProduct
