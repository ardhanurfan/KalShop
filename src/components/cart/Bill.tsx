import { Box, Button, CardContent, Typography } from '@mui/material'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Bill = () => {
    const orderPlaced = () => toast.success('Your order has been placed')

  return (
    <Box>
    <Typography variant="h4" sx={{ mb: 4, mt: 10 }}>
      Total
    </Typography>
    <Box
      sx={{
        mb: 4,
        borderRadius: 1,
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent>
        <Typography sx={{ mb: 4 }} variant="h6">
          Price Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              mb: 2,
              gap: 2,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Item Quantity</Typography>
            <Typography sx={{ color: "text.secondary" }} >
              3
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 2,
              gap: 2,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Order Total</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              $1198.00
            </Typography>
          </Box>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Delivery Charges</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  mr: 2,
                  textDecoration: "line-through",
                  color: "text.disabled",
                }}
              >
                $5.00
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <Divider sx={{ my: "0 !important" }} />
      <CardContent
        sx={{ py: (theme) => `${theme.spacing(3.5)} !important` }}
      >
        <Box
          sx={{
            gap: 2,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Total</Typography>
          <Typography sx={{ fontWeight: 500 }}>$1198.00</Typography>
        </Box>
      </CardContent>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end"
      }}
    >
      <Link to='/'>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mr: 3 }}
      >
        Back To Home
      </Button>
      </Link>

      <Button
        variant="contained"
        onClick= {orderPlaced}
      >
        Place Order
      </Button>
      <Toaster />
    </Box>
  </Box>
  )
}

export default Bill