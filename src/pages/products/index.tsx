import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DotsVertical } from "@nxweb/icons/tabler";
import type { PageComponent } from "@nxweb/react";

import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import ProductCard from "@components/productCard/ProductCard";
import { title } from "process";
import { stat } from "fs";
import ProductHot from "@components/productCard/ProductHot";

const Products: PageComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd);

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
    dispatch(command.products.load("")).catch((err: unknown) => {
      console.error(err);
    });

    return () => {
      dispatch(command.products.clear());
    };
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
