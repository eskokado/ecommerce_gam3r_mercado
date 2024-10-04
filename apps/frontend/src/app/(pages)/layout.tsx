import Page from '@/components/template/Page'
import { ProviderCar } from '@/data/contexts/ContextCar'
import { ProviderPayment } from '@/data/contexts/ContextPayment'
import { ProviderProducts } from '@/data/contexts/ContextProducts'

export default function Layout(props: any) {
    console.log("Layout", props)
    return (
        <ProviderProducts>
            <ProviderCar>
                <ProviderPayment>
                    <Page>{props.children}</Page>
                </ProviderPayment>
            </ProviderCar>
        </ProviderProducts>
    )
}
