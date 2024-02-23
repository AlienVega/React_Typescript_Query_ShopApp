import { Button } from "@mui/material";

import { CardItemType } from "../App";

import { Wrapper } from "./CardItem.styles";
import React from "react";

type Props = {
  item: CardItemType;
  addToCart: (clickedItem: CardItemType) => void;
  removeFromCard: (id: number) => void;
};
const Cardıtem: React.FC<Props> = ({ item, addToCart, removeFromCard }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total:${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCard(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default Cardıtem;
