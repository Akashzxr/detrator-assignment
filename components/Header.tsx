import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Grid
      alignItems="center"
      container
      spacing={2}
      sx={{
        minHeight: 67,
        border: "solid 1px green",
        paddingX: { xs: "2rem", md: "7rem" },
      }}
    >
      {/* Brand Name section */}
      <Grid
        sx={{ display: "flex", justifyContent: "start" }}
        size={{ xs: "grow", md: 2 }}
      >
        <div>Brand Name</div>
      </Grid>

      {/* Search Bar */}
      <Grid
        size={6}
        justifyContent="flex-start"
        display={{ xs: "none", md: "flex" }}
      >
        <SearchBar />
      </Grid>

      {/* Profile Section */}
      <Grid
        size="grow"
        sx={{
          display:"flex",
          alignItems:"center",
          gap:"10px",
          justifyContent:"end",
        }}
      >
        <Box
          sx={{
            backgroundColor: "blue",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        />
        <Box display={{ xs: "none", md: "block" }}>john</Box>
      </Grid>
    </Grid>
  );
};

export default Header;
