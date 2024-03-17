import ProductCard from "@components/productCard/ProductCard";
import { useCommand, useStore } from "@models/store";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Cross, CrossFilled, X } from "@nxweb/icons/tabler";
import { useEffect, useMemo } from "react";

function SearchPage() {
  const [search, dispatchSearch] = useStore((store) => store.search);
  const [productsState, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);
  const commandSearch = useCommand((cmd) => cmd.search);

  useEffect(() => {
    dispatch(command.getAllProducts());
  }, []);

  const products = useMemo(() => {
    if (!productsState || !productsState.products || !search) {
      return [];
    }
    return productsState.products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().toLowerCase().includes(search.toLowerCase()) ||
        product.stock.toString().toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.discountPercentage
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [productsState, search]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 6,
          alignItems: "center",
        }}
      >
        <Typography
          component="h5"
          variant="h5"
        >{`Found ${products.length} result for "${search}"`}</Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<X height={20} width={20} />}
          onClick={() => dispatchSearch(commandSearch.setSearch(""))}
        >
          Clear
        </Button>
      </Box>
      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </Grid>
    </>
  );
}

export default SearchPage;
