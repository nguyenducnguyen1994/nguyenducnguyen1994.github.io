function CartFooter({ subTotal, tax }) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${subTotal}</span>
          </li>
          <li>
            Tax 10%<span>${subTotal * tax}</span>
          </li>
          <li className="total">
            Total <span>${subTotal + (subTotal * tax)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
