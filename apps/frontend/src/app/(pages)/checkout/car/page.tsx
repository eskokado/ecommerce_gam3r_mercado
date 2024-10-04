'use client'
import HeaderCheckout from "@/components/checkout/HeaderCheckout"
import CarItem from "@/components/checkout/car/CarItem"
import CarEmpty from "@/components/checkout/car/CarEmpty"
import TotalCar from "@/components/checkout/car/TotalCar"
import useCar from "@/data/hooks/useCar"

export default function Pagina() {
        const { 
            items,
            qtyItems,
            valueTotal,
            addItem,
            removeItem,
            removeProduct, 
        } = useCar()

        return (
            <div className="flex flex-col gap-5 container">
                <HeaderCheckout passo="carrinho" />
                <div className="flex flex-col gap-4">
                    {items.length === 0 && <CarEmpty />}
                    {items.map((item: any) => (
                        <CarItem
                            key={item.product.id}
                            item={item}
                            addItem={() => addItem(item.product)}
                            removeItem={() => removeItem(item.product)}
                            removeProduct={() => removeProduct(item.product)}
                        />
                    ))}
                </div>
                <TotalCar qtyItems={qtyItems} valueTotal={valueTotal} />
            </div>
        )
}