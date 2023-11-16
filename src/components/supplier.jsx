import { Container, Paper, Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import "../App.css"

import Typography from "@mui/material/Typography";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
const title = [
  "Supplier",
  "Shipping Date",
  "Total",
  "Catogory",
  "Department",
  "Status",
];
const supplierData = [
  "EastCost Approval",
  "Thu Feb 10",
  "$3333",
  [
    <AcUnitOutlinedIcon />,
    <AirportShuttleOutlinedIcon />,
    <AirplanemodeActiveOutlinedIcon />,
    <AcUnitOutlinedIcon />,
    <AirportShuttleOutlinedIcon />,
    <AirplanemodeActiveOutlinedIcon />,
    <AcUnitOutlinedIcon />,
    <AirportShuttleOutlinedIcon />,
  ],
  "5555-666-88",
  "Awaiting Approval",
];

const Supplier = () => {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "white", mt: 3 }}>
      <Paper elevation={3}>
        <Box>
          <Grid container spacing={2}>
            {title.map((title, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={2}
                key={index}
                className="borderRight"
                sx={{ borderRight: "1px solid grey" }}
              >
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {title}
                </Typography>
                {Array.isArray(supplierData[index]) ? (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {supplierData[index].map((icon, iconIndex) => (
                      <div key={iconIndex} style={{ margin: "0.5rem" }}>
                        {icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {supplierData[index]}
                  </Typography>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Supplier;
