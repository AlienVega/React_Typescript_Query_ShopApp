import { Button } from "@mui/material";
import { CardItemType } from "../App";
import { Wrapper } from "./Item.style";
import React from "react";

type Props = {
  item: CardItemType;
  handleAddToCard: (clickedItem: CardItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCard }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCard(item)}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Item;
