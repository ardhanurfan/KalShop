import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

import type { PageComponent } from "@nxweb/react";

import { useTheme } from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import { Box, Typography } from "@mui/material";
import ProductHot from "@components/productCard/ProductHot";
import ProductCard from "@components/productCard/ProductCard";
import { useNavigate } from "react-router-dom";

const Products: PageComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [id, setId] = useState<number | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setId(id);
  };

  const handleClose = () => {
    setId(null);
    setAnchorEl(null);
  };

  const handleDetail = () => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    dispatch(command.getAllProducts()).catch((err: unknown) => {
      console.error(err);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(state);

  return (
    <>
      <Box sx={{ textAlign: "center", justifyContent: "center" }}>
        <Typography component="h1" variant="h1">
          Dapatkan Item Terbaik, Cuma Disini
        </Typography>
        <Typography component="h5" variant="h5">
          Barang barang terbaik, pasti ori, pasti kalcer
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
        <ProductCard />
      </Box>

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

      {/* <Menu
        anchorEl={anchorEl}
        id="basic-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDetail}>Detail</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu> */}
    </>
  );
};

Products.displayName = "Products";

export default Products;
