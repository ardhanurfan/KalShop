import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import productIcon from "../../assets/productImg/produk.png";
import { useSelector } from "react-redux";
import { useStore } from "@models/store";

const ProductHot = () => {
  const [state, dispatch] = useStore((store) => store.products);
  const filtered = state?.products?.filter((product) => product.rating > 4.8);
  console.log(filtered);
  const render = filtered?.map((item) => {
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
          }}
        >
          <CardMedia component="img" height="270" image={item.thumbnail} />
          <CardContent>
            <Typography variant="h5" component="h3">
              {item.title}
            </Typography>

            <p>${item.price}</p>
            <Button variant="contained">Add to Cart</Button>
          </CardContent>
        </Card>
      </div>
    );
  });

  return render;
};

export default ProductHot;
