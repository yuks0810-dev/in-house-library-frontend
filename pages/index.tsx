import type { NextPage } from "next";
import Head from "next/head";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SideBar from "../components/sideBar";
import { lightTheme } from "../components/unicornCard";
import UnicornCards from "../components/unicornCard";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const style = {
  position: "absolute" as "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px #000",
  boxShadow: 12,
  p: 4,
};

const Home: NextPage = () => {
  const [data, setData] = React.useState([]);
  console.log(`${process.env.API_ORIGIN}/books`);
  React.useEffect(() => {
    fetch(`${process.env.API_ORIGIN}/books`)
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);

  return (
    <React.StrictMode>
      <SideBar>
        <Grid container spacing={3}>
          {data.map(
            (_, index): JSX.Element => (
              <Grid item xs={12} key={index}>
                <Container fixed maxWidth="xl">
                  {[lightTheme].map((theme, index) => (
                    <Grid item xs={10} key={index}>
                      <ThemeProvider theme={theme}>
                        <Box
                          sx={{
                            p: 2,
                            bgcolor: "background.default",
                            display: "grid",
                            gridTemplateColumns: { md: "1fr 1fr" },
                            gap: 2,
                          }}
                        >
                          {[...Array(20)].map(() => (
                            <UnicornCards />
                          ))}
                        </Box>
                      </ThemeProvider>
                    </Grid>
                  ))}
                </Container>
              </Grid>
            )
          )}
        </Grid>
      </SideBar>
    </React.StrictMode>
  );
};

export default Home;
