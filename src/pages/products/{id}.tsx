import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type { PageComponent } from "@nxweb/react";

import { Chip } from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import {
  Typography,
  Button,
  Box,
  TextField,
  OutlinedInput,
} from "@mui/material";
import { Star } from "@nxweb/icons/tabler";
import { CartItem } from "@models/cart/types";
import toast from "react-hot-toast";

const Product: PageComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, dispatch] = useStore(
    (store) => store.products?.selectedProduct
  );
  const command = useCommand((cmd) => cmd.products);
  const [__, cartDispatch] = useStore((store) => store.cart);
  const cartCommand = useCommand((cmd) => cmd.cart);
  const [qty, setQty] = useState<number>(1);

  const handleQtyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQty(+e.target.value);
  };

  const handleAddCart = () => {
    if (qty <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }

    if (product?.stock! < qty) {
      toast.error("Stock not enough");
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
    navigate("/cart");
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
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", md: "30%" },
            height: "300px",
            mb: { xs: 2, md: 0 },
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
            src={product?.thumbnail}
          />
        </Box>
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
          <Typography marginTop="16px">{"Sisa " + product?.stock}</Typography>
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
              label="Qty"
              type="number"
              defaultValue={1}
              InputProps={{ inputProps: { min: 1, max: 20, step: 1 } }}
              sx={{ width: "100px", mr: 2 }}
              onChange={handleQtyChange}
            />
            <Button variant="contained" onClick={handleAddCart}>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

Product.displayName = "Product";

export default Product;
