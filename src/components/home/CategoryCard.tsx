import toTitleCase from "@lib/toTitleCase";
import { useCommand, useStore } from "@models/store";
import { Typography, Box, Grid } from "@mui/material";

function CategoryCard({ categories }: { categories: string[] }) {
  const command = useCommand((cmd) => cmd.search);
  const [__, dispatch] = useStore((store) => store.search);

  return (
    <Box sx={{ marginTop: 12 }}>
      <Typography
        variant="h3"
        component={"h3"}
        marginBottom={4}
        fontWeight={700}
      >
        Categories
      </Typography>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
        spacing={2}
      >
        {categories.map((category) => (
          <Grid item key={category} xs={6} md={4} lg={3}>
            <Box
              onClick={() => dispatch(command.setSearch(category))}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
                "&:active": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                  "& h5": {
                    color: "#ffffff",
                  },
                },
                borderRadius: 4,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                height: 80,
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h5"
                component={"h5"}
                fontSize={16}
                fontWeight={500}
              >
                {toTitleCase(category)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategoryCard;
