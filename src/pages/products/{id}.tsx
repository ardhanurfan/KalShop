import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import type { PageComponent } from "@nxweb/react";

import { Chip } from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import { Typography, Button, Box, TextField } from "@mui/material";
import { Star } from "@nxweb/icons/tabler";
import { CartItem } from "@models/cart/types";
import toast, { Toaster } from "react-hot-toast";

const Product: PageComponent = () => {
  const { id } = useParams();
  const [product, dispatch] = useStore(
    (store) => store.products?.selectedProduct
  );
  const command = useCommand((cmd) => cmd.products);
  const [__, cartDispatch] = useStore((store) => store.cart);
  const cartCommand = useCommand((cmd) => cmd.cart);
  const [qty, setQty] = useState<number>(0);

  const handleQtyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQty(+e.target.value);
  };

  const handleAddCart = () => {
    if (qty <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }

    const item: CartItem = {
      id: product?.id ?? 0,
      title: product?.title ?? "",
      price: product?.price ?? 0,
      quantity: qty,
      total: 0,
      discountPercentage: product?.discountPercentage ?? 0,
      discountedPrice:
        ((product?.price ?? 0) * (product?.discountPercentage ?? 0)) / 100,
      thumbnail: product?.thumbnail ?? "",
    };

    cartDispatch(cartCommand.addItem(item));
    toast.success("Item has been added");
  };

  useEffect(() => {
    if (id) {
      dispatch(command.selectCurrentProduct(Number.parseInt(id)));
    }
    return () => {
      dispatch(command.clear());
    };
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <img style={{ width: "30%" }} src={product?.thumbnail} />

        <Box sx={{ marginLeft: "16px" }}>
          <Typography
            component="h1"
            variant="h1"
            css={{ alignItems: "center", display: "flex", gap: "1rem" }}
          >
            {product?.title}
            <Chip label={product?.brand ?? "..."} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Star color="#FFD700" fill="#FFD700" />
            <Typography>{product?.rating}</Typography>
          </Box>
          <Typography
            variant="h4"
            color={(theme) => theme.palette.primary.main}
            marginTop="16px"
          >
            ${product?.price}
          </Typography>
          <Typography style={{ marginTop: "24px" }} variant="body1">
            {product?.description}
          </Typography>

          <Box display="flex" flexDirection="row" marginTop="54px">
            <TextField
              id="filled-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              style={{ width: "150px", marginRight: "32px" }}
              onChange={handleQtyChange}
            />
            <Button style={{}} variant="contained" onClick={handleAddCart}>
              Add to Cart
              <Toaster />
            </Button>
          </Box>
        </Box>
      </Box>

      {/* <pre>{product ? JSON.stringify(product, null, 2) : null}</pre> */}
    </>
  );
};

Product.displayName = "Product";

export default Product;
