import { Status } from './Status'
import { PaymentMethod } from './PaymentMethod'
import OrderDelivery from './OrderDelivery'
import OrderItem from './OrderItem'

export default interface Order {
    id: number
    date: Date
    items: OrderItem[]
    valueTotal: number
    status: Status
    paymentMethod: PaymentMethod
    delivery: OrderDelivery
}
