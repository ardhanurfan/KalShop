import ProductCard from "@components/productCard/ProductCard";
import { Product } from "@models/products/types";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Star, StarFilled } from "@nxweb/icons/tabler";

function RecommendedProducts({ products }: { products: Product[] }) {
  return (
    <Box sx={{ marginTop: 12 }}>
      <Typography
        variant="h3"
        component={"h3"}
        marginBottom={4}
        fontWeight={700}
      >
        Recomended Products
      </Typography>
      <Grid container sx={{ justifyContent: "center" }} spacing={4}>
        {products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 12)
          .map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
      </Grid>
    </Box>
  );
}

export default RecommendedProducts;
