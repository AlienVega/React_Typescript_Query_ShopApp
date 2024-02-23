import { useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// styles
import { Wrapper, StyledButton } from "./App.styles";

// types
export type CardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CardItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();
function App() {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([] as CardItemType[]);
  const { data, isLoading, error } = useQuery<CardItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CardItemType[]) =>
    items.reduce((ack: number, items) => ack + items.amount, 0);
  const handleAddToCard = (clickedItem: CardItemType) => {
    setCardItems((prev) => {
      const isItemInCard = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCard) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCardItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CardItemType[])
    );
  };
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Hata var</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cardOpen} onClose={() => setCardOpen(false)}>
        <Cart
          cardItems={cardItems}
          addToCart={handleAddToCard}
          removeFromCard={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCardOpen(true)}>
        <Badge badgeContent={getTotalItems(cardItems)} color="error">
          <ShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCard={handleAddToCard} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
