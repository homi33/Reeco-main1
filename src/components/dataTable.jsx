import React, { useState } from "react";
import { Container, Paper, IconButton, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Avocardo from "../images/Avocado Hass.jpg";
import InputBase from "@mui/material/InputBase";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MissingItemModal from "./missingItemModal";
import { useAuth } from "../Provider/TableDataProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #aaa",
  borderRadius: "20px",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "400px",
  },
  [theme.breakpoints.down("xs")]: {},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const columnTitles = [
  "Product Name",
  "Calories",
  "Fat",
  "Carbs",
  "Protein",
  "Status",
];

const DataTable = () => {
  const [approvedRows, setApprovedRows] = useState(new Set());
  const [missingRows, setMissingRows] = useState(new Set());
  const { data } = useAuth();

  const toggleApproved = (rowName) => {
    const newApprovedRows = new Set(approvedRows);
    if (approvedRows.has(rowName)) {
      newApprovedRows.delete(rowName);
    } else {
      newApprovedRows.add(rowName);
    }
    setApprovedRows(newApprovedRows);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleMissing = (rowName) => {
    if (!open) handleOpen();
    else handleClose();

    const newMissingRows = new Set(missingRows);
    if (newMissingRows.has(rowName)) {
      newMissingRows.delete(rowName);
    } else {
      newMissingRows.add(rowName);
    }
    setMissingRows(newMissingRows);
  };

  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "white", mt: 3, mb: 3 }}>
      <Paper elevation={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Button
              variant="outlined"
              color="success"
              sx={{
                borderRadius: "1.5rem",
                fontWeight: "bold",
                fontSize: "0.6rem",
              }}
            >
              Add Items
            </Button>
            <PrintOutlinedIcon sx={{ color: "green", marginLeft: "0.8rem" }} />
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, borderCollapse: "collapse", border: "none" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                {columnTitles.map((title, index) => (
                  <TableCell key={index}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.3rem",
                      }}
                      component="th"
                      scope="row"
                    >
                      <img width={"50px"} src={Avocardo} alt="Avocardo" />{" "}
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carb}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        maxWidth: "165px",
                        minWidth: "165px",
                        backgroundColor: "lightgrey",
                      }}
                    >
                      {approvedRows.has(row.name) && (
                        <Button
                          variant="contained"
                          color="success"
                          sx={{
                            borderRadius: "1.5rem",
                            fontWeight: "bold",
                            fontSize: "0.6rem",
                          }}
                        >
                          Approved
                        </Button>
                      )}
                      {missingRows.has(row.name) && (
                        <Button
                          variant="contained"
                          color="error"
                          sx={{
                            borderRadius: "1.5rem",
                            fontWeight: "bold",
                            fontSize: "0.6rem",
                          }}
                        >
                          Missing
                        </Button>
                      )}
                      <IconButton
                        onClick={() => toggleApproved(row.name)}
                        color={
                          approvedRows.has(row.name) ? "success" : "default"
                        }
                      >
                        <CheckIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => toggleMissing(row.name)}
                        color={missingRows.has(row.name) ? "error" : "default"}
                      >
                        <CloseIcon />
                      </IconButton>
                      <IconButton
                        variant="contained"
                        color="primary"
                        sx={{ fontSize: "0.9rem" }}
                      >
                        Edit
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <MissingItemModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Container>
  );
};

export default DataTable;
