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
import Modal from "@mui/material/Modal";

import SideBar from "../components/sideBar";

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

const BookCard = (props: { data: any }): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Link href="#" underline="none">
        <Card sx={{ minWidth: 50 }} variant="elevation">
          <CardContent>
            <Typography
              sx={{ fontSize: 18, fontweight: "bold", textAlign: "center" }}
              color="text.primary"
              gutterBottom
            >
              {props.data["title"]}
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
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  color="success"
                  fullWidth
                >
                  残数: 1
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      貸出処理
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      「タイトル」を2022/03/21 ~
                      2022/03/27の期間で貸出を行います。
                      処理を続行してよろしいですか？
                    </Typography>
                    <div style={{ textAlign: "right" }}>
                      <Button variant="contained" color="success">
                        借りる
                      </Button>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
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
    <SideBar>
      <Grid container spacing={3}>
        {data.map(
          (_, index): JSX.Element => (
            <Grid item xs={2} key={index}>
              <BookCard data={_} />
            </Grid>
          )
        )}
      </Grid>
    </SideBar>
  );
};

export default Home;
