import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DepressionTestKinya from "./depressionKinya/depressionTestKinya";
import { createTheme, ThemeProvider } from "@mui/material";
import AnxietyTestKinya from "./anxietyKinya/anxietyTestKinya";
import SubstanceTestKinya from "./substanceKinya/substanceTestKinya";

const theme = createTheme({
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#FABD48",
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TestsTabsKinya() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-36">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Igipimo Agahinda Gakabije" {...a11yProps(0)} />
                <Tab label="Igipimo cy’Umuhangayiko" {...a11yProps(1)} />
                {/* <Tab label="Substance Addiction Test" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <DepressionTestKinya />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <AnxietyTestKinya />
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={2}>
              <SubstanceTestKinya/>
            </CustomTabPanel> */}
          </Box>
        </div>
      </main>
    </ThemeProvider>
  );
}
