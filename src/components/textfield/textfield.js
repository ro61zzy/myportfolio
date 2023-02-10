import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  noBorder: {
    border: "none",
  },
}));

const TextInput = (props) => {
  const { onChange, type } = props;
  const classes = useStyles();

  return (
    <TextField
      //   variant="outlined"
      margin="normal"
      required
      fullWidth
      id="phoneNumber"
      disableUnderline={false}
      // label="Phone Number"
      name="phoneNumber"
      autoComplete="phoneNumber"
      autoFocus
      classes={{ notchedOutline: classes.input }}
      // onChange={handlePhoneNumberChange}
      className={classes.textField}
      placeholder="Phone Number"
      sx={{ border: "none", background: "#fff" }}
    />
  );
};

export default TextInput;
