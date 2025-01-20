import { Box, Grid2 } from "@mui/material";

export default function Home() {
  return (
    <Grid2 container spacing={8} paddingTop={1}>
      <Grid2 size={"grow"} display={"flex"} justifyContent={{xs:'center',md:'end'}}>
        <Box sx={{ backgroundColor: "grey", height: "100vh",border:'solid 1px blue' }} width={{xs:'90%',md:'60%'}} />
      </Grid2>
      <Grid2 size={5.6} display={{xs:'none',md:'block'}}>
        <Box sx={{ backgroundColor: "grey", width: "50%", height: "86vh",border:'solid 1px blue' }} />
      </Grid2>
    </Grid2>
  );
}
