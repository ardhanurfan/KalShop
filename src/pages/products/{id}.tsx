import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import type { PageComponent } from "@nxweb/react";

import { Chip } from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import { Typography, Button, Box, TextField } from "@mui/material";
import { Star } from "@nxweb/icons/tabler";

const Product: PageComponent = () => {
  const { id } = useParams();
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);

  const product = useMemo(
    () => state?.products?.find((o) => o.id.toString() === id),
    [state, id]
  );

  useEffect(() => {
    dispatch(command.getAllProducts());
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
            {" "}
            <TextField
              id="filled-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              style={{ width: "150px", marginRight: "32px" }}
            />
            <Button style={{}} variant="contained">
              Add to Cart
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
