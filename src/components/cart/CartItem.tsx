import { Box, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import { X } from '@nxweb/icons/tabler'

const CartItem = () => {
  return (
    <ListItem>
    <ListItemAvatar
      sx={{ display: "flex", "& img": { my: 5, mx: 8 } }}
    >
      <img
        height={120}
        width={120}
        style={{ objectFit: "cover", borderRadius: "5px" }}
        src={"https://cdn.dummyjson.com/product-images/1/2.jpg"}
        alt="Google Home"
      />
    </ListItemAvatar>
    <Grid container>
      <Grid item xs={12} md={4}>
        <ListItemText primary="Google - Google Home - White" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 2, color: "text.disabled" }}>
            Sold By:
          </Typography>
          <Typography
            sx={{
              mr: 4,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Google
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ mt: [6, 6, 5] }}>
        <Box
          sx={{
            gap: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
              lg: "center",
            },
          }}
        >
          <TextField
            label="Qty"
            type="number"
            defaultValue={2}
            InputProps={{ inputProps: { min: 1, max: 20, step: 1 } }}
            sx={{ width: "100px" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ mt: [6, 6, 8] }}>
        <Box
          sx={{
            gap: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ color: "primary.main" }}>
              $299
            </Typography>
            <Typography
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
              }}
            >
              /$359
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
    <IconButton
      size="small"
      className="remove-item"
      sx={{ color: "text.primary" }}
      style={{
        margin: "0 30px 0 60px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <X fontSize={20}></X>
    </IconButton>
  </ListItem>
  )
}

export default CartItem