import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Brightness5SharpIcon from "@material-ui/icons/Brightness5Sharp";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { useTheme, useThemeUpdate } from "../../ThemeContext";

const FlatSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    marginLeft: theme.spacing(1),
  },
  switchBase: {
    top: "2px",
    left: "2px",
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.black,
      "& + $track": {
        backgroundColor: "#333",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#333",
      border: "none",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: "none",
    backgroundColor: theme.palette.grey[300],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function ThemeSwitch() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const [nightTheme, setNightTheme] = useState(false);

  const toggleSwitch = () => {
    setNightTheme(!nightTheme);
  };

  /* <Brightness2Icon style={{ color: "white" }} /> */

  return (
    <FormGroup>
      <FormControlLabel
        style={{
          marginRight: "0px",
        }}
        control={
          <FlatSwitch
            icon={
              <Brightness5SharpIcon
                fontSize="small"
                style={{ color: "#999" }}
              />
            }
            checkedIcon={
              <Brightness2Icon fontSize="small" style={{ color: "white" }} />
            }
            checked={darkTheme}
            onChange={toggleTheme}
          />
        }
        label=""
      />
    </FormGroup>
  );
}
