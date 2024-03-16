import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import productIcon from "../../assets/productImg/produk.png";
import { useSelector } from "react-redux";
import { useStore } from "@models/store";
import { Link } from "react-router-dom";
import { Star } from "@nxweb/icons/tabler";

const ProductCard = () => {
  const [state, dispatch] = useStore((store) => store.products);
  const render = state?.products?.map((item) => {
    return (
      <div>
        <Card
          sx={{
            marginTop: "32px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "16px",
            marginRight: "16px",
            textDecoration: "none",
          }}
        >
          <Link to={`/products/${item.id}`}>
            <CardMedia component="img" height="270" image={item.images[0]} />
            <CardContent>
              <Typography
                style={{ textDecoration: "none" }}
                variant="h5"
                component="h3"
              >
                {item.title}
              </Typography>
              <Typography variant="h5" component="h3" fontSize={12}>
                {item.brand}
              </Typography>
              <Typography variant="h4" component="h4" color="green">
                ${item.price}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Star color="#FFD700" fill="#FFD700" />
                  <p>{item.rating}</p>
                </Box>
              </Box>
            </CardContent>
          </Link>
        </Card>
      </div>
    );
  });

  return render;
};

export default ProductCard;
