import type { NextPage } from "next";
import Head from "next/head";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "@mui/material";
import Button from "@mui/material/Button";

import SideBar from "../components/sideBar";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const BookCard = (props: {
  data:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}): JSX.Element => {
  return (
    <>
      <Link href="#" underline="none">
        <Card sx={{ minWidth: 50}} variant="elevation">
          <CardContent>
            <Typography
              sx={{ fontSize: 18, fontweight: "bold", textAlign: "center" }}
              color="text.primary"
              gutterBottom
            >
              本のタイトル #{props.data}
            </Typography>
            <CardMedia
              component="img"
              height="194"
              src="https://images-na.ssl-images-amazon.com/images/I/51sEua-+ejL._SX350_BO1,204,203,200_.jpg"
              alt="Book Cover"
              sx={{ objectFit: "scale-down" }}
            />
            <div style={{ textAlign: "center", padding: "10px 0px" }}>
              <div>
                <Button variant="contained">残数: 1</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

const Home: NextPage = () => {
  const [data, setData] = React.useState<Array<Number>>([]);
  React.useEffect(() => {
    const fetchData: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setData(fetchData);
  }, []);

  return (
    <SideBar>
      <Grid item xs={8}>
        <div>
          <Head>
            <title>Index Page</title>
          </Head>
          <main style={{ padding: "100px 100px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {data.map(
                  (_, index): JSX.Element => (
                    <Grid item xs={2} key={index}>
                      <BookCard data={_} />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
          </main>
        </div>
      </Grid>
    </SideBar>
  );
};

export default Home;
