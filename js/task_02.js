// const invoice = 80;
// const stock = 100;

// if (stock >= invoice) {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// } else if (stock < invoice) {
//   console.log('На складе недостаточно товаров!');
// }

// второй вариант
const invoice = 100;
const stock = 100;
// Write code under this line
const message =
  invoice <= stock
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(message);
