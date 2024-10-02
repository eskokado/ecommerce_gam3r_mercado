export default class Money {
    static formater(
        value: number,
        localization: string = 'pt-BR',
        money: string = 'BRL',
    ): string {
        return (value ?? 0).toLocaleString(localization, {
            style: 'currency',
            currency: money,
        })
    }
}
