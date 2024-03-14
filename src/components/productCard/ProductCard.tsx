import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Button } from "@nxweb/react-bootstrap";
import React from "react";
import productIcon from "../../assets/productImg/produk.png";

const ProductCard = () => {
  return (
    <div>
      <Card
        sx={{
          marginTop: "32px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" height="270" image={productIcon} />
        <CardContent>
          <Typography variant="h5" component="h3">
            COSRX FACIAL WASH
          </Typography>

          <p>RP 20.000</p>
          <Button variant="contained">Add to Cart</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
