const PRODUCTS = [
  {
    id: 1,
    name: "Laptop Acer Aspire 3 A315",
    description: "Mô tả sẳn phẩm 1",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/224582/TimerThumb/acer-aspire-3-a315-n5030-nxhe3sv00h.jpg",
    price: 7490,
    quantity: 3,
  },
  {
    id: 2,
    name: "Laptop HP 348 G7 i3 8130U",
    description: "Mô tả sản phẩm 2",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/221511/hp-348-g7-i3-9pg83pa-030020-110045-600x600.jpg",
    price: 7000,
    quantity: 5,
  },
];

function App() {
  const [products, setProducts] = React.useState(PRODUCTS);

  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;
  // Định dạng tiền tệ
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "VND",
    style: "currency",
    minimumFractionDigits: 3,
  });

  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = subTotal * taxPercent;

  function addProduct() {
    // Tạo 1 mảng mới giống hệt mảng cũ
    const newProducts = [...products];

    // Thêm phần tử vào mảng mới
    newProducts.push({
      id: 3,
      name: "Laptop Asus VivoBook X409JA i5",
      description: "Mô tả sản phẩm 3",
      image:
        "https://cdn.tgdd.vn/Products/Images/44/220526/asus-x409ja-i3-ek015t-220526-2-600x600.jpg",
      price: 10990,
      quantity: 2,
    });

    // Cập nhật state
    setProducts(newProducts);
  }

  //TODO: Xóa sản phẩm
  function removeProduct(name) {
    const newProducts = products.filter((product) => product.name !== name);
    alert("Xóa sản phẩm " + name);
    setProducts(newProducts);
  }

  // function validate(value) {
  //   let num = parseInt(value, 10);
  //   if (num < 0 || num > 99) alert("Nhập giá trị 0~99");
  // }

  return (
    <main>
      <CartHeader
        title="Shopping Cart"
        numberItems={numberItems}
        addProduct={addProduct}
      />

      <CartBody
        products={products}
        removeProduct={removeProduct}
        formatter={formatter}
      />

      <CartFooter subTotal={subTotal} tax={tax} formatter={formatter} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
