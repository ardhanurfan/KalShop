import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import EmptyCart from "@components/cart/EmptyCart";
import CartItem from "@components/cart/CartItem";
import OrderPlaced from "@components/cart/OrderPlaced";
import { useCommand, useStore } from "@models/store";
import { HistoryItem } from "@models/history/types";

const Cart = () => {
  const [placed, setPlaced] = useState<Boolean>(false);
  const [bill, setBill] = useState<{
    qty: number;
    orderTotal: number;
    total: number;
  }>({
    qty: 0,
    orderTotal: 0,
    total: 0,
  });

  const [state, dispatch] = useStore((store) => store.cart);
  const [__, dispatchHistories] = useStore((store) => store.histories);
  const command = useCommand((cmd) => cmd.cart);
  const commandHistories = useCommand((cmd) => cmd.histories);

  const orderPlaced = () => {
    if (state) {
      const newOrder: HistoryItem = {
        ...state,
        date: new Date(),
        orderTotal: bill.orderTotal,
        deliveryCharge: 5,
      };

      dispatchHistories(commandHistories.addItem(newOrder));
      dispatch(command.clear());
      setPlaced(true);
    }
  };

  useEffect(() => {
    let qtyTotal = 0;
    let orderTotal = 0;

    state?.products.forEach((item) => {
      qtyTotal += item.quantity;
      orderTotal +=
        item.quantity *
        (item.price - (item.price * item.discountPercentage) / 100);
    });

    setBill({
      qty: qtyTotal,
      orderTotal: +orderTotal.toFixed(2),
      total: +(orderTotal + 5).toFixed(2),
    });
  }, [state]);

  return (
    <Card>
      <CardContent sx={{ my: 5 }}>
        {placed ? (
          <OrderPlaced />
        ) : state?.products.length ? (
          <>
            {/* =========================== NOT EMPTY =========================== */}
            <Box>
              <Typography variant="h5" sx={{ mb: 4 }}>
                My Shopping Bag ( {bill.qty} items )
              </Typography>
              <List
                sx={{
                  mb: 4,
                  border: "solid 1px #dedde0",
                  borderRadius: "10px",
                }}
              >
                {state?.products.map((item, index) => (
                  <>
                    <CartItem key={item.id} data={item} dispatch={dispatch} />
                    {index < (state.products.length ?? 0) - 1 && (
                      <Divider sx={{ mt: "0" }} />
                    )}
                  </>
                ))}
              </List>
            </Box>

            {/* ====================================== BILL ====================================== */}
            <Box>
              <Typography variant="h4" sx={{ mb: 4, mt: 10 }}>
                Total
              </Typography>
              <Box
                sx={{
                  mb: 4,
                  borderRadius: 1,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <CardContent>
                  <Typography sx={{ mb: 4 }} variant="h6">
                    Price Details
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        mb: 2,
                        gap: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Item Quantity</Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {bill.qty}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        mb: 2,
                        gap: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Order Total</Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        ${bill.orderTotal}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        gap: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Delivery Charges</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Typography sx={{ color: "text.secondary" }}>
                          $5
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
                <Divider sx={{ my: "0 !important" }} />
                <CardContent
                  sx={{ py: (theme) => `${theme.spacing(3.5)} !important` }}
                >
                  <Box
                    sx={{
                      gap: 2,
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontWeight: 500 }}>Total</Typography>
                    <Typography sx={{ fontWeight: 500 }}>
                      ${bill.total}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link to="/">
                  <Button variant="contained" color="secondary" sx={{ mr: 3 }}>
                    Back To Home
                  </Button>
                </Link>

                <Button variant="contained" onClick={orderPlaced}>
                  Place Order
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <EmptyCart />
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;
