import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { CatContext } from "../context/CategoryContext";
import { AddContext } from "../context/AddDataContext";
import { TransContext } from "../context/TransactionContext";

const initState = {
  title: "",
  amount: "",
  type: "income",
  category: "2",
  date: "",
};

const Forms = () => {
  // start
  const [value, setValue] = React.useState(initState);
  const { data, loading, error } = React.useContext(CatContext);

  const { postApi } = React.useContext(AddContext);

  function handleChange(e) {
    setValue((d) => {
      return {
        ...d,
        [e.target.name]: e.target.value,
      };
    });
  }


  function handleClick() {
    postApi(value);
  }

  return (
    <Box
      sx={{ p: "30px", display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Typography
        variant="h1"
        color="white"
        sx={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Add New Budget
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          sx={{ bgcolor: "white" }}
          value={value.title}
          name="title"
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="filled-basic"
          type="number"
          label="Amount"
          variant="filled"
          sx={{ bgcolor: "white" }}
          value={value.amount}
          name="amount"
          onChange={handleChange}
          //   onBlur={handleBlur}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "270px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              sx={{ bgcolor: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={value.category}
              name="category"
              onChange={handleChange}
            >
              {data &&
                !loading &&
                data.map((categoryEle) => {
                  return (
                    <MenuItem key={categoryEle.id} value={categoryEle.id}>
                      {categoryEle.name}
                    </MenuItem>
                  );
                })}
              {error && !loading && (
                <Typography variant="p" sx={{ textAlign: "center" }}>
                  error please try later
                </Typography>
              )}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TextField
        type="date"
        variant="filled"
        sx={{ bgcolor: "white" }}
        name="date"
        value={value.date}
        onChange={handleChange}
      />

      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{ bgcolor: "white", color: "#bbb" }}
      >
        Save
      </Button>
    </Box>
  );
};

export default Forms;
