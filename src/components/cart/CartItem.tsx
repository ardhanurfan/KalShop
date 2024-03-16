import { CartAction } from "@models/cart/types";
import type { CartItem } from "@models/cart/types";
import { useCommand } from "@models/store";
import {
  Box,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { X } from "@nxweb/icons/tabler";
import { ChangeEvent, useState } from "react";

interface PropsType {
  data: CartItem;
  dispatch: React.Dispatch<CartAction>;
}

const command = useCommand((cmd) => cmd.cart)

const CartItem = ({data, dispatch}: PropsType) => {
  const removeItem = () => {
    dispatch(command.removeItem(data))
  }

  const handleQtyChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(command.editQty({ ...data, quantity: +e.target.value }))
  }

  return (
    <ListItem>
      <ListItemAvatar sx={{ display: "flex", "& img": { my: 5, mx: 8 } }}>
        <img
          height={120}
          width={120}
          style={{ objectFit: "cover", borderRadius: "5px" }}
          src={data.thumbnail.toString()}
          alt={data.title}
        />
      </ListItemAvatar>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ListItemText primary={data.title} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 2, color: "text.disabled" }}>
              Discount:
            </Typography>
            <Typography
              sx={{
                mr: 4,
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              {(data.discountPercentage).toFixed(2)}%
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
              defaultValue={data.quantity}
              InputProps={{ inputProps: { min: 1, max: 20, step: 1 } }}
              sx={{ width: "100px" }}
              onChange={handleQtyChange}
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
              <Typography sx={{ color: "primary.main" }}>{(data.price - (data.price * data.discountPercentage / 100)).toFixed(2)}</Typography>
              <Typography
                sx={{
                  color: "text.disabled",
                  textDecoration: "line-through",
                }}
              >
                /${data.price}
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
        onClick={removeItem}
      >
        <X fontSize={20}></X>
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
