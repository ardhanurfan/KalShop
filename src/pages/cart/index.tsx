import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { X } from "@nxweb/icons/tabler";

import EmptyCart from "@components/cart/EmptyCart";
import CartItem from "@components/cart/CartItem";
import OrderPlaced from "@components/cart/OrderPlaced";

const Cart = () => {
  const[placed, setPlaced] = useState<Boolean>(false)

  const orderPlaced = () => {
    toast.success('Your order has been placed')
    setPlaced(true)
  }

  return (
    <Card>
      <CardContent sx={{ my: 5 }}>
        {placed
        ? <OrderPlaced />
        : <EmptyCart />}


        {/* =========================== NOT EMPTY =========================== */}
        <Box>
          <Typography variant="h5" sx={{ mb: 4 }}>
            My Shopping Bag ( n items )
          </Typography>
          <List
            sx={{ mb: 4, border: "solid 1px #dedde0", borderRadius: "10px" }}
          >
            <CartItem />
            <Divider sx={{ mt: "0" }} />
            <ListItem>
              <ListItemAvatar
                sx={{ display: "flex", "& img": { my: 5, mx: 8 } }}
              >
                <img
                  height={120}
                  width={120}
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                  src={"https://cdn.dummyjson.com/product-images/1/2.jpg"}
                  alt="Google Home"
                />
              </ListItemAvatar>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <ListItemText primary="Google - Google Home - White" />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ mr: 2, color: "text.disabled" }}>
                      Sold By:
                    </Typography>
                    <Typography
                      onClick={(e) => e.preventDefault()}
                      sx={{
                        mr: 4,
                        color: "primary.main",
                        textDecoration: "none",
                      }}
                    >
                      Google
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ mt: [6, 6, 5] }}>
                  <Box
                    sx={{
                      gap: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: {
                        xs: "flex-start",
                        md: "flex-end",
                        lg: "center",
                      },
                    }}
                  >
                    <TextField
                      label="Qty"
                      type="number"
                      defaultValue={2}
                      InputProps={{ inputProps: { min: 1, max: 20, step: 1 } }}
                      sx={{ width: "100px" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ mt: [6, 6, 8] }}>
                  <Box
                    sx={{
                      gap: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", md: "flex-end" },
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Typography sx={{ color: "primary.main" }}>
                        $299
                      </Typography>
                      <Typography
                        sx={{
                          color: "text.disabled",
                          textDecoration: "line-through",
                        }}
                      >
                        /$359
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <IconButton
                size="small"
                className="remove-item"
                sx={{ color: "text.primary" }}
                style={{
                  margin: "0 30px 0 60px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X fontSize={20}></X>
              </IconButton>
            </ListItem>
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
                  <Typography sx={{ color: "text.secondary" }} >
                    3
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
                    $1198.00
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
                    <Typography
                      sx={{
                        mr: 2,
                        textDecoration: "line-through",
                        color: "text.disabled",
                      }}
                    >
                      $5.00
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
                <Typography sx={{ fontWeight: 500 }}>$1198.00</Typography>
              </Box>
            </CardContent>
          </Box>
          <Box
            sx={{
              display: "flex",
              // ...(breakpointSM ? { justifyContent: "flex-end" } : {}),
              justifyContent: "flex-end"
            }}
          >
            <Link to='/'>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mr: 3 }}
            >
              Back To Home
            </Button>
            </Link>

            <Button
              variant="contained"
              onClick= {orderPlaced}
            >
              Place Order
            </Button>
            <Toaster />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cart;
