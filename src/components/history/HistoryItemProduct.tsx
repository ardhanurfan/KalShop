import { CartItem } from "@models/cart/types";
import { Box, Divider, Grid, Typography } from "@mui/material";

function HistoryItemProduct({ product }: { product: CartItem }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <img
        height={120}
        width={120}
        style={{ objectFit: "cover", borderRadius: "8px" }}
        src={product.thumbnail}
        alt={product.title}
      />
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">{product.title}</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "primary.main" }}>{`$${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}`}</Typography>
            <Typography
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              /${product.price}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "text.disabled" }}>
            {`Quantity: ${product.quantity} pcs`}
          </Typography>
          <Typography
            sx={{
              mr: 4,
              color: "primary.main",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {"$" +
              (
                (product.price -
                  (product.price * product.discountPercentage) / 100) *
                product.quantity
              ).toFixed(2)}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}

export default HistoryItemProduct;
