const PRODUCTS = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy Note 10+",
    description: "Description 1",
    image: "https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-den-400x460-400x460.png",
    price: 1000,
    quantity: 8,
  },
  {
    id: 2,
    name: "Laptop HP 15s du1077TX i7",
    description: "Description 2",
    image: "https://cdn.tgdd.vn/Products/Images/44/227071/hp-15s-du1077tx-i7-8gb-10510u-512gb-2gb-mx130-win1-600x600.jpg",
    price: 2000,
    quantity: 2,
  },
];

// Tính lại dựa vào PRODUCTS ở trên
let tax = 0.1; 
let numberItems = 0;
let subTotal = 0;
for (let product of PRODUCTS) {
  subTotal += product.price * product.quantity;
  numberItems += product.quantity;
}

// let subTotal = PRODUCTS.reduce((a,c)=>(a+c.price*c.quantity),0);
// let tax = 0; // Thuế = 10% subTotal

ReactDOM.render(
  <main>
    <CartHeader numberItems={numberItems} title="Shopping Cart" />

    <CartBody products={PRODUCTS} />

    <CartFooter subTotal={subTotal} tax={tax}/>
  </main>,
  document.getElementById("root")
);
