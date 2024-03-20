import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import toTitleCase from "@lib/toTitleCase";
import { Star } from "@nxweb/icons/tabler";
import { Link } from "react-router-dom";
import { Product } from "@models/products/types";
import { useCommand, useStore } from "@models/store";
import toast from "react-hot-toast";
import { CartItem } from "@models/cart/types";

const ProductHot = ({ product }: { product: Product }) => {
  const [__, cartDispatch] = useStore((store) => store.cart);
  const cartCommand = useCommand((cmd) => cmd.cart);

  const handleAddCart = () => {
    if (product?.stock! < 1) {
      toast.error("Stock not enough");
      return;
    }

    const item: CartItem = {
      id: product?.id ?? 0,
      title: product?.title ?? "",
      price: product?.price ?? 0,
      quantity: 1,
      total: 0,
      discountPercentage: product?.discountPercentage ?? 0,
      discountedPrice:
        ((product?.price ?? 0) * (product?.discountPercentage ?? 0)) / 100,
      thumbnail: product?.thumbnail ?? "",
    };

    cartDispatch(cartCommand.addItem(item));
    toast.success("Item has been added");
  };

  return (
    <Grid item xs={6} md={4} lg={2}>
      <Card elevation={1} sx={{ height: "100%" }}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <CardMedia component="img" height="200" image={product.thumbnail} />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              paddingLeft: 3,
              paddingTop: 3,
              paddingRight: 3,
            }}
          >
            <Box sx={{ height: "50px" }}>
              <Typography
                variant="h5"
                component={"h5"}
                fontWeight={500}
                fontSize={16}
              >
                {product.title}
              </Typography>
              <Typography
                variant="h5"
                component={"h5"}
                fontSize={12}
                color={(theme) => theme.palette.grey[500]}
              >
                {toTitleCase(product.category)}
              </Typography>
              <Typography
                variant="h4"
                component={"h4"}
                color={(theme) => theme.palette.primary.main}
              >
                {"$" + product.price}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Star color="#FFD700" fill="#FFD700" />
              <Typography
                variant="h5"
                component={"h5"}
                fontSize={12}
                sx={{ ml: 1 }}
              >
                {product.rating}
              </Typography>
            </Box>
          </CardContent>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Button
            sx={{ width: "100%" }}
            onClick={handleAddCart}
            variant="contained"
          >
            Add to Cart
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default ProductHot;
