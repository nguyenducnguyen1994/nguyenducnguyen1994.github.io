function CartFooter({ subTotal, tax, formatter }) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatter.format(subTotal)}</span>
          </li>
          <li>
            Tax <span>{formatter.format(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatter.format(subTotal + tax)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}
