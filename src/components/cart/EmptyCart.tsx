import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ m: 4 }}>
        {`Your cart is empty! :(`}
      </Typography>
      <Link to="/">
        <Button variant="contained" sx={{ m: 4 }}>
          Add Item to Cart
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyCart;
