import { iconPlusColor, product_1 } from "../../imports";

export default function GoodsSection() {
  function GoodsNew({ className }) {
    return (
      <div className={className}>
        <h4>Посудомоечная машина CANDY CP 6F51LS-08</h4>
        <img src={product_1} alt="product" />
        <h4>23 999 руб.</h4>
        <img src={iconPlusColor} alt="cart" className="cart-buy" />
      </div>
    );
  }

  return (
    <section className="inline">
      <GoodsNew
        className={"margin-first-elem product-section commissioner-regular"}
      />
      <GoodsNew className={"product-section commissioner-regular"} />
      <GoodsNew className={"product-section commissioner-regular"} />
      <GoodsNew className={"product-section commissioner-regular"} />
      <GoodsNew className={"product-section commissioner-regular"} />
      <GoodsNew
        className={"margin-last-elem product-section commissioner-regular"}
      />
    </section>
  );
}
