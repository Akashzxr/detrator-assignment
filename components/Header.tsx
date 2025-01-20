import React from "react";
import { Box, Grid2 } from "@mui/material";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Grid2
      minHeight={67}
      alignItems="center"
      container
      spacing={2}
      border="solid 1px green"
      paddingX={{ xs: "2rem", md: "7rem" }}
    >
      <Grid2 display="flex" justifyContent="start" size={{ xs: "grow", md: 2 }}>
        <div>Brand Name</div>
      </Grid2>
      <Grid2
        size={6}
        justifyContent="flex-start"
        display={{ xs: "none", md: "flex" }}
      >
        <SearchBar />
      </Grid2>
      <Grid2
        size="grow"
        display="flex"
        alignItems="center"
        gap="10px"
        justifyContent="end"
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
      </Grid2>
    </Grid2>
  );
};

export default Header;
