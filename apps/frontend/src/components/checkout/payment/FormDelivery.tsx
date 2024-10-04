import { OrderDelivery } from '@gstore/core'

export interface FormDeliveryProps {
    delivery: Partial<OrderDelivery>
    updatedDelivery: (delivery: Partial<OrderDelivery>) => void
    className?: string
}

export default function FormDelivery(props: FormDeliveryProps) {
    const { delivery, updatedDelivery } = props

    function updateAtribute(atribute: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            updatedDelivery({ ...delivery, [atribute]: e.target.value })
        }
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Dados da Entrega
            </span>
            <div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
                <input
                    placeholder="Nome Completo"
                    value={delivery.name}
                    onChange={updateAtribute('name')}
                    className="input"
                />
                <div className="flex gap-5">
                    <input
                        placeholder="E-mail"
                        value={delivery.email}
                        onChange={updateAtribute('email')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="CPF"
                        value={delivery.cpf}
                        onChange={updateAtribute('cpf')}
                        className="input flex-1"
                    />
                </div>
                <div className="flex gap-5">
                    <input
                        placeholder="Logradouro"
                        value={delivery.street}
                        onChange={updateAtribute('street')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="Complemento"
                        value={delivery.complement}
                        onChange={updateAtribute('complement')}
                        className="input"
                    />
                </div>
                <div className="flex gap-5">
                    <input
                        placeholder="Cidade"
                        value={delivery.city}
                        onChange={updateAtribute('city')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="Estado"
                        value={delivery.state}
                        onChange={updateAtribute('state')}
                        className="input flex-1"
                    />
                </div>
            </div>
        </div>
    )
}
