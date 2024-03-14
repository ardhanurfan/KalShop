import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ m: 4 }}>
        {`Thank You! :D`}
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
