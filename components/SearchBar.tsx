import { Box } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      display="flex"
      justifyContent='end'
      alignItems='center'
      paddingX='13px'
      minHeight='41px'
      width='70%'
      sx={{
        border: "solid black 2px",
      }}
    >
      <SearchIcon fontSize="medium"/>
    </Box>
  );
};

export default SearchBar;
