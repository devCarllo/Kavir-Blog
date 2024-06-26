import { Card, createTheme, styled } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#263238",
    },
    secondary: {
      main: "#eceff1",
    },
  },

  typography: {
    fontFamily: ["Open Sans", "Noto Sans Arabic"].join(","),
  },

  direction: "rtl",
});

const CustomCard = styled(Card)({
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  height: "400px",
});

export default theme;
export { CustomCard };
