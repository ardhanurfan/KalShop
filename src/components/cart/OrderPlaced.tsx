import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const OrderPlaced = () => {

  return (
    <Box>
      <Toaster/>
      <Typography variant="h3" sx={{ m: 4 }}>
        {`Your order has been placed, thank you! :D`}
      </Typography>
      <Link to="/">
        <Button variant="contained" sx={{ m: 4 }}>
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default OrderPlaced;
