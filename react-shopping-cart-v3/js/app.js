const PRODUCTS = [
  {
    id: 10,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 12000,
    quantity: 3,
  },
  {
    id: 20,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7000,
    quantity: 11,
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
      name: "Laptop DELL 3",
      description: "Description 2",
      image: "https://via.placeholder.com/200x150",
      price: 500,
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

  function validate(value) {
    let num = parseInt(value, 10);
    if (num < 0 || num > 99) alert("Nhập giá trị 0~99");
  }

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
        validate={validate}
      />

      <CartFooter subTotal={subTotal} tax={tax} formatter={formatter} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
