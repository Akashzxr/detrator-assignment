"use client";
import Header from "@/components/Header";
import "@fontsource/poppins";
import { createTheme, Grid2, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif", // Replace 'Roboto' with your font name
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body style={{ margin: "0px" }}>
          <Grid2 height={'100vh'} overflow={'hidden'}>
            <Header />
            {children}
          </Grid2>
        </body>
      </html>
    </ThemeProvider>
  );
}
