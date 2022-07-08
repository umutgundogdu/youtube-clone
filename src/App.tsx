import { useState } from "react";
import { Chip, Toolbar, Grid } from "@mui/material";

import "./App.css";

// components
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import VideoCard from "./components/VideoCard";
import Chips from "./components/Chips";
function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={4}>
          <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={2}>
              <Menu isAuth={isAuth} setIsAuth={setIsAuth} />
            </Grid>
            <Grid container spacing={2} item xs={10}>
              <Grid item md={12}>
                <Toolbar sx={{ overflowX: "auto" }}>
                  <Chips />
                </Toolbar>
              </Grid>
              <VideoCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
