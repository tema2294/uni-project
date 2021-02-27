export const formatAmount = (value) => {
    const format = () => (
        `${value}`.split(`.`).map((it, i) => {
            if (i === 0) {
                return it.split(``).reverse().map((it, i) => {
                    return i % 3 ? it : `${it} `
                }).reverse().join(``).trim()
            }
            return it
        }).join(`,`)
    )

    return value ? format() : 0
}
