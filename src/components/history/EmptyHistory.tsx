import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyHistory = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ m: 4 }}>
        {`You do'nt have any order! :(`}
      </Typography>
      <Link to="/products">
        <Button variant="contained" sx={{ m: 4 }}>
          Let's Shopping
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyHistory;
