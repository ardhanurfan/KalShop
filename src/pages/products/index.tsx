import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

import type { PageComponent } from "@nxweb/react";

import { useTheme } from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import { Box, Grid, Typography } from "@mui/material";
import ProductHot from "@components/productCard/ProductHot";
import ProductCard from "@components/productCard/ProductCard";
import { useNavigate } from "react-router-dom";

const Products: PageComponent = () => {
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);

  useEffect(() => {
    dispatch(command.getAllProducts());
  }, []);

  return (
    <>
      <Box sx={{ textAlign: "center", justifyContent: "center", mb: 8 }}>
        <Typography component="h1" variant="h1">
          Dapatkan Item Terbaik, Cuma Disini
        </Typography>
        <Typography component="h5" variant="h5">
          Barang barang terbaik, pasti ori, pasti kalcer
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {state?.products?.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </Grid>
      <Box sx={{ marginTop: "64px" }}>
        <Typography component="h1" variant="h1">
          Lagi laris manies
        </Typography>
        <Typography component="h5" variant="h5">
          bingung pengen checkout apa? coba liat barang disini
        </Typography>
      </Box>
      <Box
        py={2}
        px={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <ProductHot />
      </Box>
    </>
  );
};

Products.displayName = "Products";

export default Products;
