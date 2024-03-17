import EmptyHistory from "@components/history/EmptyHistory";
import HistoryCard from "@components/history/HistoryCard";
import { useStore } from "@models/store";
import { Typography, Box } from "@mui/material";

function History() {
  const [histories] = useStore((store) => store.histories);

  return (
    <>
      {histories && histories?.histories.length > 0 ? (
        <>
          <Box>
            <Typography variant="h5" sx={{ mb: 4 }}>
              My Histories Order
            </Typography>
            {histories?.histories.reverse().map((item) => (
              <HistoryCard key={item.id} history={item} />
            ))}
          </Box>
        </>
      ) : (
        <EmptyHistory />
      )}
    </>
  );
}

export default History;
