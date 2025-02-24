purchaseAmount = prompt("Введите сумму покупки в рублях:");/8520k

purchaseAmount = Number(purchaseAmount);

if (isNaN(purchaseAmount) || purchaseAmount < 0) {
    console.log("Ошибка: введите корректное положительное число");
} else {
    let discount = 0;
    let discountAmount = 0;
    let finalAmount = 0;

    if (purchaseAmount < 1000) {
        discount = 0;
    } else if (purchaseAmount >= 1000 && purchaseAmount < 5000) {
        discount = 5;
    } else if (purchaseAmount >= 5000 && purchaseAmount < 10000) {
        discount = 10;
    } else if (purchaseAmount >= 10000) {
        discount = 15;
    }

    discountAmount = purchaseAmount * (discount / 100);
    finalAmount = purchaseAmount - discountAmount;

    finalAmount = finalAmount.toFixed(2);
    discountAmount = discountAmount.toFixed(2);

    console.log(`Сумма покупки: ${purchaseAmount} руб.`);
    console.log(`Скидка: ${discount}% (${discountAmount} руб.)`);
    console.log(`Итоговая сумма: ${finalAmount} руб.`);
}