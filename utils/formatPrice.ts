export const formatPrice = (amount:number) =>{
    return new Intl.NumberFormat('en-us', {
        style:'currency',
        currency:'KSH',
    }).format(amount)

}
