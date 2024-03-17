import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Calendar } from "@nxweb/icons/tabler";
import HistoryItemProduct from "./HistoryItemProduct";
import { HistoryItem } from "@models/history/types";
import { formatDate } from "@nxweb/core";

function HistoryCard({ history }: { history: HistoryItem }) {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Calendar />
          <Typography variant="h6">
            {formatDate(history.date.toISOString(), "dddd, MMMM YYYY HH:mm:ss")}
          </Typography>
        </Box>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            {history.products.map((product, index) => (
              <Box key={index}>
                <HistoryItemProduct product={product} />
                {index < (history.products.length ?? 0) - 1 && (
                  <Divider sx={{ my: 2 }} />
                )}
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ mr: 2, color: "text.disabled" }}>
                  Total Order:
                </Typography>
                <Typography
                  sx={{
                    mr: 4,
                    color: "primary.main",
                    textDecoration: "none",
                  }}
                >
                  {"$" + history.orderTotal.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ mr: 2, color: "text.disabled" }}>
                  Delivery Charges:
                </Typography>
                <Typography
                  sx={{
                    mr: 4,
                    color: "primary.main",
                    textDecoration: "none",
                  }}
                >
                  {"$" + history.deliveryCharge.toFixed(2)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mr: 2, color: "text.disabled" }}>
                  Total:
                </Typography>
                <Typography
                  sx={{
                    mr: 4,
                    color: "primary.main",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {"$" +
                    (history.orderTotal + history.deliveryCharge).toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default HistoryCard;
