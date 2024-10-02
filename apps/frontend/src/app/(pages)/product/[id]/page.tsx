import BannerPurchase from '@/components/product/BannerPurchase'
import InformationsProduct from '@/components/product/InformationsProduct'
import ProductNotFound from '@/components/product/ProductNotFound'
import TitleProduct from '@/components/product/TitleProduct'
import { products } from '@gstore/core'

export default function PageProduct(props: any) {
    const id = +props.params.id
    const product = products.find((product) => product.id === id)

    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TitleProduct product={product} />
                <InformationsProduct product={product} />
                <BannerPurchase product={product} />
            </div>
        </div>
    ) : (
        <ProductNotFound />
    )
}
