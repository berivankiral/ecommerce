import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartProvider";

const CartTable = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <table className="shop-table">
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">ÜRÜN</th>
          <th className="product-price">FİYAT</th>
          <th className="product-quantity">MİKTAR</th>
          <th className="product-subtotal">ARA TOPLAM</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item._id} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;