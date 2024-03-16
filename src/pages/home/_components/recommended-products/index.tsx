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
      <Grid container sx={{ justifyContent: "center" }} spacing={2}>
        {products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 12)
          .map((product) => (
            <Grid item key={product.id} xs={6} md={4} lg={2}>
              <Card elevation={1} sx={{ height: "100%" }}>
                <CardContent sx={{ p: 2 }}>
                  <img
                    src={product.thumbnail}
                    alt="movie.title"
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography variant="h5" component={"h5"} fontSize={14}>
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    fontSize={12}
                    color={(theme) => theme.palette.grey[500]}
                  >
                    {product.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    color={(theme) => theme.palette.primary.main}
                  >
                    {"$" + product.price}
                  </Typography>
                  <Box>
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
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default RecommendedProducts;
