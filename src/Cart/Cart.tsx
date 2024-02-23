import Cardıtem from "../CardItem/Cardıtem";

import { Wrapper } from "./Cart.styles";

import { CardItemType } from "../App";
import React from "react";

type Props = {
  cardItems: CardItemType[];
  addToCart: (clickedItem: CardItemType) => void;
  removeFromCard: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cardItems, addToCart, removeFromCard }) => {
  const calculateTotal = (items: CardItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your Basket</h2>
      {cardItems.length === 0 ? <p>No items in cart</p> : null}
      {cardItems.map((item) => (
        <Cardıtem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCard={removeFromCard}
        />
      ))}
      <h2>Total: ${calculateTotal(cardItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
