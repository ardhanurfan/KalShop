import { useStore } from "@models/store";
import { Box, IconButton, Typography } from "@mui/material";
import { ShoppingCart } from "@nxweb/icons/tabler";
import { useNavigate } from "react-router-dom";

function CartButton() {
  const navigate = useNavigate();
  const [cart] = useStore((store) => store.cart);

  return (
    <IconButton
      aria-haspopup="true"
      color="inherit"
      onClick={() => navigate("/cart")}
      sx={{ position: "relative", height: 40, width: 40 }}
    >
      {cart && cart?.products.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            borderRadius: "50%",
            backgroundColor: "red",
            padding: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 20,
            width: 20,
          }}
        >
          <Typography color="white" fontSize={10}>
            {cart?.products.reduce((acc, cur) => acc + cur.quantity, 0)}
          </Typography>
        </Box>
      )}
      <ShoppingCart height={40} width={40} />
    </IconButton>
  );
}

export default CartButton;
