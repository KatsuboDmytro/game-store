export const calcTotalPrice = (items:any) => items.reduce((acc:any, item:any) => (acc += item.price), 0);

export const enumerate = (num:number, dec:any) => {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}