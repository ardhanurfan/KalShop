import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Star } from "@nxweb/icons/tabler";
import { Product } from "@models/products/types";
import toTitleCase from "@lib/toTitleCase";
import { Link } from "react-router-dom";
import { useCommand, useStore } from "@models/store";

const ProductCard = ({ item }: { item: Product }) => {
  const [__, dispatch] = useStore((store) => store.search);
  const command = useCommand((cmd) => cmd.search);

  return (
    <Grid item xs={6} md={4} lg={2}>
      <Link
        onClick={() => dispatch(command.setSearch(""))}
        to={`/products/${item.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card elevation={1} sx={{ height: "100%" }}>
          <CardMedia component="img" height="200" image={item.thumbnail} />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 1, p: 3 }}
          >
            <Typography
              variant="h5"
              component={"h5"}
              fontWeight={500}
              fontSize={16}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              component={"h5"}
              fontSize={12}
              color={(theme) => theme.palette.grey[500]}
            >
              {toTitleCase(item.category)}
            </Typography>
            <Typography
              variant="h4"
              component={"h4"}
              color={(theme) => theme.palette.primary.main}
            >
              {"$" + item.price}
            </Typography>
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
                {item.rating}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductCard;
