import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Container, useTheme } from "@mui/material";

const OrderId = () => {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl" sx={{ flexGrow: 1, color: "black" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "1rem",
            ml: 5,
            mr: 4,
            mt: 1,
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              ml: 1,
            },
          }}
        >
          Orders <KeyboardArrowRightIcon /> Order 123456788
        </Typography>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "black",
              ml: 1.8,
              fontWeight: "bold",
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              [theme.breakpoints.down("sm")]: {
                ml: -1,
                fontSize: "1rem",
              },
            }}
          >
            {" "}
            Order 123456788
          </Typography>
          <Button
            variant="outlined"
            color="success"
            sx={{
              borderRadius: "1.5rem",
              fontWeight: "bold",
              fontSize: "0.6rem",
              marginRight: "0.6rem",
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: "1.5rem",
              fontWeight: "bold",
              fontSize: "0.6rem",
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            }}
          >
            Approved Order
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default OrderId;
