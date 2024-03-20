import type { MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";

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

  const hotProducts = useMemo(() => {
    if (!state || !state.products) {
      return [];
    }

    return [...state.products].filter((product) => product.rating > 4.8);
  }, [state]);

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
      <Box sx={{ marginTop: "64px", marginBottom: 8 }}>
        <Typography component="h1" variant="h1">
          Lagi laris manies
        </Typography>
        <Typography component="h5" variant="h5">
          bingung pengen checkout apa? coba liat barang disini
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {hotProducts.map((product) => (
          <ProductHot product={product} />
        ))}
      </Grid>
    </>
  );
};

Products.displayName = "Products";

export default Products;
