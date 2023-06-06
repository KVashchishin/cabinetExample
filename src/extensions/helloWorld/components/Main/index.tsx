import { Grid } from "@mui/material";
import * as React from "react";
import Content from "./Content";
import DataProvider from "./DataProvider";
import Sidebar from "./Sidebar";

// interface IUserData {
//   /** User data */
//   userData: any;
//   /** Active widgets */
//   widgets: Array<string>;
// }

const Main = (): React.ReactElement => {
  // Об'єкт для прикладу у вас має бути щось складніше 👀
  const [init, setInit] = React.useState({
    userData: {
      id: 1,
      name: "Name",
    },
    widgets: ["Contracts"],
  });

  React.useEffect(() => {
    setInit((prevState) => ({ ...prevState, widgets: ["TEST"] }));
  }, []);

  const initialData: any = {
    initData: init,
    setDate: setInit,
  };

  return (
    <DataProvider data={initialData}>
      <Grid container>
        <Grid item xs={2} sx={{ backgroundColor: "lightblue" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{ backgroundColor: "lightcyan" }}>
          <Content />
        </Grid>
      </Grid>
    </DataProvider>
  );
};

export default Main;
