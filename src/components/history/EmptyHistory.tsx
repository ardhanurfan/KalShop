import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyHistory = () => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          my: 5,
        }}
      >
        <Typography variant="h3" sx={{ m: 4 }}>
          {`You do'nt have any order! :(`}
        </Typography>
        <Link to="/products">
          <Button variant="contained" sx={{ m: 4 }}>
            Let's Shopping
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EmptyHistory;
