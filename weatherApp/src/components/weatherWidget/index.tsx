import { useSelector } from "react-redux";
import type { AppState } from "../../store/";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import ThermostatIcon from "@mui/icons-material/Thermostat";
import GrainIcon from "@mui/icons-material/Grain";
import AirIcon from "@mui/icons-material/Air";

import CelFahSwitch from "./tempratureSwitcher";
import Buttons from "./Actions";

const Widget = function () {
  const weatherState = useSelector((state: AppState) => state.weather);
  const { city = "", detail = {} } = weatherState;
  return Object.keys(weatherState).length > 0 ? (
    <Card>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ textAlign: "left", textTransform: "capitalize" }}
        >
          {city}
        </Typography>
        {Object.entries(detail).map(([key, value]) => (
          <Box
            key={`${key}-${value}`}
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "8px",
                alignItems: "center",
              }}
            >
              {key === "temperature" ? (
                <ThermostatIcon color="primary" />
              ) : key === "humidity" ? (
                <GrainIcon color="primary" />
              ) : (
                <AirIcon color="primary" />
              )}
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize" }}
              >
                {key}
              </Typography>
            </Box>
            {key === "temperature" ? (
              <CelFahSwitch value={value} />
            ) : (
              <Typography variant="body1">{value}</Typography>
            )}
          </Box>
        ))}
      </CardContent>
      <CardActions>
        <Buttons />
      </CardActions>
    </Card>
  ) : null;
};
export default Widget;
