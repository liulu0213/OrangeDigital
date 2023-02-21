import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "inline-flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const CelFahSwitch = function ({ value }: { value: number }) {
  const [val, setVal] = useState(value);
  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault;
    const target = e.target;
    if (target.checked) {
      setVal(value);
    } else {
      setVal((value * 9) / 5 + 32);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        alignContent: "center",
        width: "120px",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Typography variant="caption">&#176;F</Typography>
        <AntSwitch
          defaultChecked
          inputProps={{ "aria-label": "ant design" }}
          onChange={handleChange}
        />
        <Typography variant="caption">&#176;C</Typography>
      </Stack>
      <Typography variant="body1">{`${val}`}</Typography>
    </Box>
  );
};

export default CelFahSwitch;
